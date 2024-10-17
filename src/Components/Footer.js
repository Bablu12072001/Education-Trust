import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #90caf9, #0d47a1)",
        color: "white",
        padding: { xs: 4, md: 6 },
        marginTop: 4,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Typography variant="h3" sx={{ color: "blue" }} fontWeight="bold">
            People Centered
          </Typography>
          <Typography variant="h3" sx={{ color: "blue" }} fontWeight="bold">
            Education Trust
          </Typography>
          <Typography fontWeight="bold">
            @2021 People Centered Lighthouse. All rights reserved
          </Typography>
          <Typography sx={{ color: "blue" }}>
            Privacy Policy . Terms of Use
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h4" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography>Email:</Typography>
          <Typography color="blue">www.xyz@gmail.com</Typography>
          <Typography>Phone:</Typography>
          <Typography color="blue">+91 212-115-1565</Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h4" fontWeight="bold">
            Quick Links
          </Typography>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/">
            About Us
          </Button>
          <Button color="inherit" href="/">
            Contact Us
          </Button>
          <Button color="inherit" href="/">
            Donate
          </Button>
          <Button color="inherit" href="/">
            Board Members
          </Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h4" fontWeight="bold">
            Follow Us
          </Typography>
          <Button color="inherit">
            <FacebookOutlinedIcon />
          </Button>
          <Button color="inherit">
            <TwitterIcon />
          </Button>
          <Button color="inherit">
            <InstagramIcon />
          </Button>
        </Grid>
      </Grid>

      {/* Horizontal line and copyright notice */}
      <Box sx={{ borderTop: "1px solid white", mt: 4, pt: 2 }}>
        <Typography align="center" variant="body2">
          &copy; {new Date().getFullYear()} EDUCATION TRUST. Developed by
          <a
            href="https://p5digital.in/" // Replace with the actual link if different
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "lightblue", textDecoration: "none" }} // Link styling
          >
            P5 Digital Solutions
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
