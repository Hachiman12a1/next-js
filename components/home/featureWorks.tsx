import { Post, Work } from "@/models";
import { Stack, Typography, Link as MuiLink, Container } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { WorkList } from "../work";
import { PostCard } from "./postCard";

export function FeatureWorks() {
  const workList: Work[] = [
    {
      id: "1",
      title: "Designing Dashboards",
      createdAt: "1666163907593",
      updatedAt: "1666163907593",
      tagList: ["Dashboard"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/ddcuulhed/image/upload/v1666170622/next-js/Rectangle_32_v9m4mu.jpg",
    },
    {
      id: "2",
      title: "Vibrant Portraits of 2020",
      createdAt: "1666163907593",
      updatedAt: "1666163907593",
      tagList: ['Illustration'],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/ddcuulhed/image/upload/v1666170622/next-js/Rectangle_34_zx1kqp.jpg",
    },
    {
      id: "3",
      title: "36 Days of Malayalam type",
      createdAt: "1666163907593",
      updatedAt: "1666163907593",
      tagList: ["Typography"],
      shortDescription:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      fullDescription: "",
      thumbnailUrl:
        "https://res.cloudinary.com/ddcuulhed/image/upload/v1666170622/next-js/Rectangle_30_refqki.jpg",
    },
  ];

  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
        >
          <Typography variant="h5">Featured Posts</Typography>

          <Link passHref href="/blog">
            <MuiLink sx={{ display: { xs: "none", md: "inline" } }}>
              View all
            </MuiLink>
          </Link>
        </Stack>

        <WorkList workList = {workList}/>
      </Container>
    </Box>
  );
}
