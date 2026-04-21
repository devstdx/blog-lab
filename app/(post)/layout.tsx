import { Header } from "./header";
import { getPosts } from "../get-posts";
import { ClickOutside } from "./components/click-outside";

export const revalidate = 300;

export default async function Layout({ children }) {
  const posts = await getPosts();

  return (
    <article className="text-gray-800 dark:text-gray-300 mb-10">
      <ClickOutside />
      <Header posts={posts} />

      {children}
    </article>
  );
}
