import type { MetadataRoute } from "next";
import { getData } from "@/data/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${getData().url}/` }];
}
