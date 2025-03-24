import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isPublicRoute = createRouteMatcher(["/signin"]);
const isProtectedRoute = createRouteMatcher(["/profile", "/hives"]);

export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  if (isPublicRoute(request)) return;

  const isAuthenticated = await convexAuth.isAuthenticated();
  const isProtected = isProtectedRoute(request);

  if (!isAuthenticated) {
    return nextjsMiddlewareRedirect(request, "/signin");
  }

  if (!isProtected && isAuthenticated) {
    return nextjsMiddlewareRedirect(request, "/profile");
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
