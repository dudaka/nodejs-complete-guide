const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<header>');
        res.write('<title>');
        res.write('Send an message');
        res.write('</title>');
        res.write('</header>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('</input>');
        res.write('<button type="submit">Send');
        res.write('</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<header>');
    res.write('<title>');
    res.write('My first Node.js program');
    res.write('</title>');
    res.write('</header>');
    res.write('<body>');
    res.write('<h1>');
    res.write('Hello from Node.js');
    res.write('</h1>');
    res.write('</body>');
    res.write('</html>');

    res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';



