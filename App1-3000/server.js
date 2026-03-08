import http from "http";
import worker from "./worker.js";

const server = http.createServer(async (req, res) => {
  const request = new Request(`http://${req.headers.host}${req.url}`, {
    method: req.method,
    headers: req.headers,
  });

  const response = await worker.fetch(request, {}, {});
  const text = await response.text();

  res.writeHead(response.status || 200, {
    "Content-Type": "text/plain",
  });

  res.end(text);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});