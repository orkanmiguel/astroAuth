//solo es una demostracion

import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";

const privateRoutes = ["/protected"];

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async ({ url, request }, next) => {
  console.log("Ejecutado en el lado del servidor");
  /* 
  console.log(context.url); */

  const authHeaders = request.headers.get("authorization") ?? "";

  console.log(authHeaders);

  if (privateRoutes.includes(url.pathname)) {
    return checkLocalAtuh(authHeaders, next);
  }

  return next();
});

const checkLocalAtuh = (authHeaders: string, next: MiddlewareNext) => {
  if (authHeaders) {
    const authValue = authHeaders.split(" ").at(-1) ?? "";
    const decodeValue = atob(authValue).split(":");

    const [user, password] = decodeValue;

    if (user === "admin" && password === "admin") {
      return next();
    }
  }

  return new Response("Auth necesaria", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic real="Secure Area"',
    },
  });
};
