"use server";

import { incrementView } from "./lib/kv";

/**
 * Emmanuel's Blog - Server Actions
 * This action records a view for a given post ID.
 */
export async function recordView(id: string) {
  if (!id) return;
  
  // We only increment in production to avoid polluting view counts
  if (process.env.NODE_ENV === "development") {
    return;
  }

  try {
    const views = await incrementView(id);
    return { success: true, views };
  } catch (error) {
    console.error("Failed to record view:", error);
    return { success: false };
  }
}
