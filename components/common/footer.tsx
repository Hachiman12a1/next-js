import * as React from "react";
import { Box } from "@mui/system";
import { Stack, Typography, Icon } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

export interface FooterProps {}

export function Footer(props: FooterProps) {
  const socialLinks = [
    { icon: Facebook, url: "http://www.facebook.com" },
    { icon: Instagram, url: "https://www.instagram.com/" },
    { icon: Twitter, url: "https://twitter.com/" },
    { icon: LinkedIn, url: "https://www.linkedin.com/" },
  ];

  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction ="row" justifyContent = "center">
        {socialLinks.map((item, index) => (
          <Box component="a" key={index} p = {2} href = {item.url} target = "_blank" rel = "noopener noreferer">
            <Icon component={item.icon} sx = {{fontSize : 48}} />
          </Box>
        ))}
      </Stack>
      <Typography>
        Copyright ©{new Date().getFullYear()} All rights reserved{" "}
      </Typography>
    </Box>
  );
}
