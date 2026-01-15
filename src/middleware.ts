import { defineMiddleware } from "astro:middleware";
import { createAuthClient } from "better-auth/client";
import { anonymousClient } from "better-auth/client/plugins";

export const onRequest = defineMiddleware(async (context, next) => {
  const authClient = createAuthClient({
    baseURL: import.meta.env.PUBLIC_SERVER_URL as string,
    fetchOptions: {
      headers: context.request.headers
    },
    plugins: [anonymousClient()]
  })  
  const { data: isAuthed } = await authClient.getSession()

  if (isAuthed) {
    context.locals.user = isAuthed.user;
    context.locals.session = isAuthed.session;
  } else {
    context.locals.user = null;
    context.locals.session = null;
  }

  return next();
});