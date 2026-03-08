// src/worker.js
var worker_default = {
  async fetch(request, env, ctx) {
    console.info({ message: "Hello World Worker received a request!" });
    return new Response("Welcome To My Website - App2 1234!");
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
