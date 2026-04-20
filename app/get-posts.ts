import postsData from "./posts.json";
import { getAllViews } from "./lib/kv";
import commaNumber from "comma-number";

export type Post = {
  id: string;
  date: string;
  title: string;
  views: number;
  viewsFormatted: string;
};

export const getPosts = async () => {
  let allViews: Record<string, number> = {};
  
  try {
    allViews = await getAllViews();
  } catch (e) {
    console.error("Failed to fetch views from KV:", e);
  }

  const posts = postsData.posts.map((post): Post => {
    const views = allViews[post.id] ?? 0;
    return {
      ...post,
      views,
      viewsFormatted: commaNumber(views),
    };
  });
  return posts;
};
