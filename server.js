const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Decode URL to handle spaces and special characters
    const decodedUrl = decodeURIComponent(req.url);
    
    // Handle logo requests - serve from root logo directory
    if (decodedUrl.startsWith('/logo/')) {
        filePath = path.join(__dirname, decodedUrl);
    } else {
        filePath = path.join(__dirname, 'mathwebpage', decodedUrl === '/' ? 'index.html' : decodedUrl);
    }
    
    const extname = path.extname(filePath);
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
        case '.txt':
            contentType = 'text/plain';
            break;
        case '.pdf':
            contentType = 'application/pdf';
            break;
    }
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error');
            }
        } else {
            // Set appropriate headers for PDF downloads
            if (contentType === 'application/pdf') {
                const filename = path.basename(filePath);
                res.writeHead(200, {
                    'Content-Type': contentType,
                    'Content-Disposition': `attachment; filename="${filename}"`,
                    'Content-Length': content.length
                });
                res.end(content);
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, contentType.startsWith('text/') ? 'utf-8' : undefined);
            }
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Your mathematics teacher website is ready!`);
});