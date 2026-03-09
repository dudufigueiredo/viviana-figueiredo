import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configurações do site",
  type: "document",
  fields: [
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "contactEmail",
      title: "E-mail de contato",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Configurações do site" };
    },
  },
});
