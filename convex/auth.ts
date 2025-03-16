import { ConvexCredentials } from "@convex-dev/auth/providers/ConvexCredentials";
import { convexAuth, createAccount, retrieveAccount } from "@convex-dev/auth/server";
import { Scrypt } from "lucia";

const provider = "gift-hive";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [ConvexCredentials({
    id: provider,
    authorize: async (credentials, ctx) => {
      const username = credentials.username as string;
      const secret = credentials.password as string;
      // Sign up logic
      if (credentials.flow === "signUp") {
        const profile = {
          username,
          firstname: credentials.firstname as string,
          lastname: credentials.lastname as string,
          birthdate: new Date(credentials.birthdate as string).getTime(),
        }
        const created = await createAccount(ctx, {
          provider,
          account: { id: username, secret },
          profile,
        });
        if (!created) {
          throw new Error("Failed to create account");
        }
        return { userId: created.user._id };
      }
      // Sign in logic
      else if (credentials.flow === "signIn") {
        const retrieved = await retrieveAccount(ctx, { provider, account: { id: username, secret } });
        if (!retrieved) {
          throw new Error("Invalid credentials");
        }
        return { userId: retrieved.user._id };
      } else {
        throw new Error(
          'Missing `flow` param, it must be one of "signUp", "signIn"',
        );
      }
    },
    crypto: {
      async hashSecret(password: string) {
        return await new Scrypt().hash(password);
      },
      async verifySecret(password: string, hash: string) {
        return await new Scrypt().verify(hash, password);
      },
    },
  })],
});
