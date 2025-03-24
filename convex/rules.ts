import { addEntRules } from "convex-ents";
import { Id } from "./_generated/dataModel";
import { entDefinitions } from "./schema";
import { QueryCtx } from "./types";

export function getEntDefinitionsWithRules(
  ctx: QueryCtx,
): typeof entDefinitions {
  return addEntRules(entDefinitions, {
    hives: {
      read: async (task) => {
        const members = await task.edge("members");
        return members.some((member) => member._id === ctx.viewerId);
      },
    },
  });
}

export async function getViewerId(
  ctx: Omit<QueryCtx, "table" | "viewerId" | "viewer" | "viewerX">,
): Promise<Id<"users"> | null> {
  const user = await ctx.auth.getUserIdentity();
  if (user === null) {
    return null;
  }
  const firstPipe = user.tokenIdentifier.indexOf("|");
  if (firstPipe === -1) return null;
  const secondPipe = user.tokenIdentifier.indexOf("|", firstPipe + 1);
  if (secondPipe === -1) return null;
  const userId = user.tokenIdentifier.substring(firstPipe + 1, secondPipe);
  return userId as Id<"users">;
}
