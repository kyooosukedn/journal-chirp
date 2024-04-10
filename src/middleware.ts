import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // console logging
  debug: true,
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
