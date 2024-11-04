import { type SchemaTypeDefinition } from "sanity";
import { author } from "@/sanity/schemaTypes/author";
import { startUp } from "@/sanity/schemaTypes/startuUp";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startUp],
};
