const http = require("http");

http.request("www.google.com", (res) => {
  res.on("data", (chunk) => {});
});
