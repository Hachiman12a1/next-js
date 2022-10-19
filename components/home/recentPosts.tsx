import { Post } from "@/models/index";
import { Stack, Typography, Link as MuiLink, Container } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { PostCard } from "./postCard";

export function RecentPosts() {
  const postList: Post[] = [
    {
      id: "1",
      title: "Making a design system from scratch",
      publishDate: "1666163907593",
      tagList: ["Design", "Pattern"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: "2",
      title: "Creating pixel perfect icons in Figma",
      publishDate: "1666163907593",
      tagList: ["Figma", "Icon Design"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
        >
          <Typography variant="h5">Recent Posts</Typography>

          <Link passHref href="/blog">
            <MuiLink sx={{ display: { xs: "none", md: "inline" } }}>
              View all
            </MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={3}
          sx={{
            "& > div": {
              width: {
                xs: "100%",
                md: "50%",
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
