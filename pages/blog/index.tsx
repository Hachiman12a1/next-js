import { getPostList } from "@/utils/posts";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import * as React from "react";

export interface BlogListPageProps {
  posts: any[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  console.log('posts', posts);
  
  return (
    <div>
      <h1>Blog List Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // server side
  // build-time

  // convert markdown files into list of javascript objects
  const postList = await getPostList();

  return {
    props: {
      posts: postList
    },
  };
};
