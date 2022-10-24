import { Post } from "@/models";
import { getPostList } from "@/utils/posts";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import { Box, Container, Divider } from "@mui/material";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkPrism from "remark-prism";
import Script from "next/script";
import { Seo } from "@/components/common";

export interface BlogPageProps {
  post: Post;
}

export default function BlogPage({ post }: BlogPageProps) {
  if (!post) return null;

  return (
    <Box>
      <Seo
        data={{
          title: post.title,
          description: post.description,
          url: `${process.env.HOST_URL}/blog/${post.slug}`,
          thumbnailUrl:
            post.thumbnailUrl ||
            "https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png",
        }}
      />
      <Container>
        <p>{post.title}</p>
        <p>{post.author?.name}</p>

        <Divider />

        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}></div>
      </Container>

      <Script src="/prism.js" strategy="afterInteractive"></Script>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();
  const slug = context.params?.slug;

  if (!slug) {
    return { notFound: true };
  }

  const post = postList.find((x) => x.slug === slug);
  if (!post) {
    return { notFound: true };
  }

  // parse md to html
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: "Agenda.*" })
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeDocument, { title: "Blog details page" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || "");

  post.htmlContent = file.toString();

  return {
    props: {
      post,
    },
  };
};
