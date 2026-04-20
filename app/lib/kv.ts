import { kv } from "@vercel/kv";

/**
 * Emmanuel's Blog - Key-Value Storage
 * This uses Vercel KV to store view counts.
 */

const KV_PREFIX = "views:";

export async function getViews(id: string): Promise<number> {
  const views = await kv.get<number>(`${KV_PREFIX}${id}`);
  return views ?? 0;
}

export async function getAllViews(): Promise<Record<string, number>> {
  const keys = await kv.keys(`${KV_PREFIX}*`);
  if (keys.length === 0) return {};

  const values = await kv.mget<number[]>(...keys);
  
  const results: Record<string, number> = {};
  keys.forEach((key, index) => {
    const id = key.replace(KV_PREFIX, "");
    results[id] = values[index] ?? 0;
  });
  
  return results;
}

export async function incrementView(id: string): Promise<number> {
  return await kv.incr(`${KV_PREFIX}${id}`);
}
