import { v } from "convex/values";
import { mutation, query } from "./functions";

export const createHive = mutation({
  args: {
    name: v.string(),
    description: v.string(),
  },
  handler: async (ctx, { name, description }) => {
    const viewer = await ctx.viewerX();

    if (name.length <= 0) {
      throw new Error("Name is required");
    }

    return await ctx.table("hives").insert({
      name,
      description,
      members: [viewer._id],
      ownerId: viewer._id,
    });
  },
});

export const myHives = query({
  handler: async (ctx) => {
    const viewer = await ctx.viewerX();
    const hives = await viewer.edge("hives").docs();
    return hives;
  },
});

export const byId = query({
  args: {
    id: v.id("hives"),
  },
  handler: async (ctx, { id }) => {
    return await ctx.table("hives").getX(id).doc();
  },
});
