const http = require('http');
const fs = require('fs');
const path = require('path');

let viewCount = 0;

// 读取初始观看次数
const viewCountFilePath = path.join(__dirname, 'viewCount.txt');
if (fs.existsSync(viewCountFilePath)) {
    viewCount = parseInt(fs.readFileSync(viewCountFilePath, 'utf8'), 10) || 0;
}

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            // 发送HTML页面
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Video Page</title>
                </head>
                <body>
                <center>    
                    <video id="myVideo" width="400" height="300" controls>
                        <source src="https://usst-lilab.github.io/images/video/uav.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video><br>
                    小锋号启航 (Edited by Yuru Hu) 
                    <p><img src="https://usst-lilab.github.io/images/实验区/video.png" alt="Email Icon" style="width: 32px; height: 25px;">Video Views: <span id="viewCount">0</span></p>
                </center>
                
                <script>
                    const videoElement = document.getElementById('myVideo');
                    const viewCountElement = document.getElementById('viewCount');
                    
                    const fetchViewCount = async () => {
                        try {
                            const response = await fetch('/api/viewCount');
                            const data = await response.json();
                            viewCountElement.innerText = data.viewCount;
                        } catch (error) {
                            console.error('Error fetching view count:', error);
                        }
                    };

                    const incrementViewCount = async () => {
                        try {
                            const response = await fetch('/api/incrementViewCount', { method: 'POST' });
                            const data = await response.json();
                            viewCountElement.innerText = data.viewCount;
                        } catch (error) {
                            console.error('Error incrementing view count:', error);
                        }
                    };

                    let playedFor = 0;
                    const playThreshold = 20; // Minimum play time in seconds to count as a view

                    videoElement.addEventListener('timeupdate', function() {
                        if (!videoElement.paused && !videoElement.ended) {
                            playedFor++;
                        }

                        if (playedFor >= playThreshold) {
                            playedFor = 0; // Reset the counter
                            incrementViewCount();
                            videoElement.removeEventListener('timeupdate', arguments.callee); // Remove the listener to avoid multiple counts
                        }
                    });

                    fetchViewCount(); // Initial fetch of view count
                </script>
                </body>
                </html>
            `);
        } else if (req.url === '/api/viewCount') {
            // 发送当前观看次数
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ viewCount }));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    } else if (req.method === 'POST' && req.url === '/api/incrementViewCount') {
        // 更新观看次数
        viewCount++;
        fs.writeFile(viewCountFilePath, viewCount.toString(), (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to update view count' }));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ viewCount }));
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
