import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  users: defineTable({
    username: v.string(),
    firstname: v.string(),
    lastname: v.string(),
    birthdate: v.number(),
  }).index("by_username", ["username"]),
  hives: defineTable({
  }),
  hiveMemberships: defineTable({
  }),
  hiveInvites: defineTable({
  }),
  ideas: defineTable({
  }),
  comments: defineTable({
  }),
});
