"use server";

/**
 * Mock mode — view recording is disabled until KV is reconnected
 */
export async function recordView(id: string) {
  return { success: true };
}
