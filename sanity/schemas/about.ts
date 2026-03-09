import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "Sobre",
  type: "document",
  fields: [
    defineField({
      name: "bio",
      title: "Biografia",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Sobre" };
    },
  },
});
