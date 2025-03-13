import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
// The schema provides more precise TypeScript types.
export default defineSchema({
  ...authTables,
  users: defineTable({
    firstname: v.optional(v.string()),
    lastname: v.optional(v.string()),
    fullname: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    // other "users" fields...
  }).index("email", ["email"]),
});
