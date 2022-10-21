import Router from "@koa/router";

const router = new Router();

(await import("./routes/index.js")).register(router);

export { router };
