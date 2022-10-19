import { HeroSection, RecentPosts } from "@/components/home";
import { MainLayout } from "@/components/layout";
import { Box } from "@mui/system";
import { NextPageWithLayout } from "../models";

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
