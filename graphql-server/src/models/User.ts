import { builder } from "../builder"
import { prisma } from "../db"

builder.prismaObject("User", {
	fields: (t) => ({
		id: t.exposeID("id", { nullable: false }),
		name: t.exposeString("name", { nullable: false }),
		messages: t.relation("messages", { nullable: false })
	})
})

builder.queryField("users", (t) =>
	t.prismaField({
		type: ["User"],
		nullable: false,
		resolve: async (query, root, args, ctx, info) => {
			return prisma.user.findMany({ ...query });
		},
	})
);

// builder.queryField("users", (t) =>
// 	t.prismaField({
// 		type: ["User"],
// 		resolve: async (query, root, args, ctx, info) => {
// 			return prisma.user.findMany({
// 				...query
// 			})
// 		}
// 	})
// )