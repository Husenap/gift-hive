import { authTables } from "@convex-dev/auth/server";
import {
  defineEnt,
  defineEntSchema,
  defineEntsFromTables,
  getEntDefinitions,
} from "convex-ents";
import { v } from "convex/values";

const schema = defineEntSchema({
  ...defineEntsFromTables(authTables),

  users: defineEnt({})
    .field("username", v.string())
    .field("firstname", v.string())
    .field("lastname", v.string())
    .field("birthdate", v.number())
    .index("by_username", ["username"])
    .edges("hives", {
      to: "hives",
      table: "hiveMemberships",
    })
    .edges("invites", {
      to: "hives",
      table: "hiveInvites",
    })
    .edges("ideas", {
      to: "ideas",
      ref: true,
    })
    .edges("comments", {
      to: "comments",
      ref: true,
    })
    .edges("ownedHives", {
      to: "hives",
      ref: true,
    }),

  hives: defineEnt({})
    .field("name", v.string())
    .field("description", v.string(), { default: "" })
    .edges("members", {
      to: "users",
      table: "hiveMemberships",
    })
    .edges("invites", {
      to: "users",
      table: "hiveInvites",
    })
    .edges("ideas", {
      to: "ideas",
      ref: true,
    })
    .edge("owner", { to: "users" }),

  ideas: defineEnt({})
    .field("title", v.string())
    .field("description", v.string(), { default: "" })
    .field("isArchived", v.boolean(), { default: false })
    .edge("hive", { to: "hives" })
    .edge("author", { to: "users" })
    .edges("comments", {
      to: "comments",
      ref: true,
    }),

  comments: defineEnt({})
    .field("text", v.string())
    .edge("author", { to: "users" })
    .edge("idea", { to: "ideas" }),
});

export default schema;

export const entDefinitions = getEntDefinitions(schema);
