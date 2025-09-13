// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./schemas";

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "eiuhd8my",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema
});