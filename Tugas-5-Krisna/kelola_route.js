const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.get('/hello', (req, res) => {
    res.send({
        message: "Success fetch message",
        data: "Hello World!"
    });
});

app.get('/user', (req, res) => {
    res.send({
        message: "Success fetch user",
        data: {
            id: 1,
            name: "Budi",
            username: "budidu",
            email: "budidu@mail.com"
        }
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running at <http://localhost>:${port}`);
});
