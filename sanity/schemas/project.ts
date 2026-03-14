import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projeto",
  type: "document",
  fields: [
    orderRankField({ type: "project" }),
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
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "coverImage",
    },
  },
  orderings: [orderRankOrdering],
});
