const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
    // Decode URL to handle spaces and special characters; strip query string
    const decodedUrl = decodeURIComponent((req.url || '/').split('?')[0]);

    // Resolve file path
    let filePath;
    if (decodedUrl.startsWith('/logo/')) {
        filePath = path.join(__dirname, decodedUrl);
    } else {
        filePath = path.join(
            __dirname,
            'mathwebpage',
            decodedUrl === '/' ? 'index.html' : decodedUrl
        );
    }

    const extname = path.extname(filePath).toLowerCase();
    let contentType = 'text/html';

    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
        case '.webp':
            contentType = 'image/webp';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        case '.pdf':
            contentType = 'application/pdf';
            break;
    }

    // Stat file first to set caching headers and handle 304s
    fs.stat(filePath, (statErr, stat) => {
        if (statErr) {
            if (statErr.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error');
            }
            return;
        }

        const etag = `W/"${stat.size}-${stat.mtimeMs}"`;
        const lastModified = stat.mtime.toUTCString();
        const isHtml = contentType === 'text/html';

        // Prepare headers
        const headers = {
            'Content-Type': contentType,
            'ETag': etag,
            'Last-Modified': lastModified,
            'Vary': 'Accept-Encoding'
        };

        // Cache policy: HTML short/no-cache, static assets long-lived
        if (isHtml) {
            headers['Cache-Control'] = 'no-cache';
        } else {
            headers['Cache-Control'] = 'public, max-age=31536000, immutable';
        }

        // Conditional requests (ETag or Last-Modified)
        const ifNoneMatch = req.headers['if-none-match'];
        const ifModifiedSince = req.headers['if-modified-since'];
        const notModifiedByEtag = ifNoneMatch && ifNoneMatch === etag;
        const notModifiedByDate =
            ifModifiedSince && new Date(ifModifiedSince).getTime() >= stat.mtime.getTime();

        if (notModifiedByEtag || notModifiedByDate) {
            res.writeHead(304, headers);
            res.end();
            return;
        }

        // PDFs and most binary files shouldn't be compressed
        const isCompressible =
            /^(text\/|application\/(javascript|json|xml))/.test(contentType) ||
            contentType === 'image/svg+xml';

        // For PDF downloads, keep Content-Disposition and avoid compression
        if (contentType === 'application/pdf') {
            const filename = path.basename(filePath);
            headers['Content-Disposition'] = `attachment; filename="${filename}"`;
            headers['Content-Length'] = stat.size;
            res.writeHead(200, headers);
            fs.createReadStream(filePath).pipe(res);
            return;
        }

        const acceptEncoding = String(req.headers['accept-encoding'] || '');
        const readStream = fs.createReadStream(filePath);

        if (isCompressible && /\bbr\b/.test(acceptEncoding)) {
            headers['Content-Encoding'] = 'br';
            // Do not set Content-Length when streaming compressed content
            res.writeHead(200, headers);
            readStream.pipe(zlib.createBrotliCompress()).pipe(res);
            return;
        }

        if (isCompressible && /\bgzip\b/.test(acceptEncoding)) {
            headers['Content-Encoding'] = 'gzip';
            res.writeHead(200, headers);
            readStream.pipe(zlib.createGzip()).pipe(res);
            return;
        }

        // Fallback: no compression
        headers['Content-Length'] = stat.size;
        res.writeHead(200, headers);
        readStream.pipe(res);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Your mathematics teacher website is ready!`);
});