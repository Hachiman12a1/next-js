import { Seo } from "@/components/common";
import { FeatureWorks, HeroSection, RecentPosts } from "@/components/home";
import { MainLayout } from "@/components/layout";
import { Box } from "@mui/system";
import { NextPageWithLayout } from "../models";

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: "Dat Next JS ",
          description: "Learn Next JS Base",
          url: "https://www.facebook.com/",
          thumbnailUrl:
            "https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png",
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
