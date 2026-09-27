import type { MetadataRoute } from "next";
import { getData } from "@/data/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${getData().url}/sitemap.xml`,
  };
}
