const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<header>');
        res.write('<title>');
        res.write('Assignment 1');
        res.write('</title>');
        res.write('</header>');
        res.write('<body>');
        res.write('<h1>This is my solution for assignment 1</h1>')
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username"></input>');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<header>');
        res.write('<title>');
        res.write('Assignment 1');
        res.write('</title>');
        res.write('</header>');
        res.write('<body>');
        res.write('<ul><li>User 1</li></ul>');
        res.write('<ul><li>User 2</li></ul>');
        res.write('<ul><li>User 3</li></ul>');
        res.write('<ul><li>User 4</li></ul>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
};

exports.handler = requestHandler;
exports.someText = 'This is my solution for assignment 1';