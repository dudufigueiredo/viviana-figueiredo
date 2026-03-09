import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projeto",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "location",
      title: "Localização",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Imagem de capa",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Galeria",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "coverImage",
    },
  },
  orderings: [
    {
      title: "Ordem manual",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
