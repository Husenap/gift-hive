import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import { MutationCtx } from "./_generated/server";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Password],
  callbacks: {
    async createOrUpdateUser(ctx: MutationCtx, { existingUserId, profile, provider, type, shouldLink }) {
      if (existingUserId) return existingUserId;

      const name = profile.email?.split("@")[0];
      const parts = name?.split(/[._]/);
      const firstname = parts?.[0] || name;
      const lastname = parts?.[1];
      const fullname = lastname ? `${firstname} ${lastname}` : firstname;

      return ctx.db.insert("users", {
        email: profile.email,
        firstname,
        lastname,
        fullname,
      });
    }
  }
});
