import { builder } from "../builder"

builder.prismaObject("Message", {
    fields: (t) => ({
        id: t.exposeID("id", { nullable: false }),
        body: t.exposeString("body", { nullable: false }),
        createdAt: t.expose("createdAt", {
            type: "Date",
            nullable: false
        }),
    }),
});