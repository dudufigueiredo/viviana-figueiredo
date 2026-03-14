import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/admin",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  title: "Viviana Figueiredo",
  schema,
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title("Conteúdo")
          .items([
            orderableDocumentListDeskItem({
              type: "project",
              title: "Projetos",
              S,
              context,
            }),
            S.listItem()
              .title("Sobre")
              .child(
                S.document()
                  .schemaType("about")
                  .documentId("about")
                  .title("Sobre")
              ),
            S.listItem()
              .title("Configurações do site")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Configurações do site")
              ),
          ]),
    }),
    visionTool(),
  ],
});
