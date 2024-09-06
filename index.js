const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.type("html").send(html));

const server = app.listen(port, () => console.log(`listening on port ${port}`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
    <head>
    <title>
        express
    </title>
    </title>
    <body>
        <p>
            express
        </p>
    </body>
</html>
`;
