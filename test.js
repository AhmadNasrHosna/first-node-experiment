let http = require("http");

let app = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello, and welcome to our app.");
  } else if (req.url == "/about") {
    res.end("About us");
  } else if (req.url == "/contact") {
    res.end("Contact us");
  } else {
    res.end("ERROR!");
  }
});
app.listen(3000);
