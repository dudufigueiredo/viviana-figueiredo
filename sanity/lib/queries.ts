import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    location,
    coverImage,
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    location,
    coverImage,
    gallery,
  }
`;

export const aboutQuery = groq`
  *[_type == "about"][0] {
    bio,
    photo,
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    instagramUrl,
  }
`;
