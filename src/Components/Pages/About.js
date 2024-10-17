import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import image1 from "../Images/img1.jpg"; // Replace with actual image path
import image2 from "../Images/children.jpg"; // Replace with actual image path
import Heading from "../Heading";

function AboutUs() {
  return (
    <>
      <Heading />
      <Container
        sx={{
          padding: { xs: 2, md: 4 },
          marginTop: { xs: 10, md: 20 },
          background: "linear-gradient(to right, #e3f2fd, #bbdefb)",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ marginBottom: 4, fontWeight: "bold", color: "#0d47a1" }}
        >
          About Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={image1}
                alt="Education Trust Initiative"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  height: "auto",
                  maxWidth: "500px", // Optional max width for larger screens
                }}
              />
              <Typography
                variant="h5"
                align="center"
                sx={{ marginTop: 2, fontWeight: "bold", color: "#0d47a1" }}
              >
                Our Mission
              </Typography>
              <Typography align="center" sx={{ marginTop: 1 }}>
                We strive to provide accessible education for underprivileged
                children, enabling them to reach their full potential.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={image2}
                alt="Community Support"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  height: "auto",
                  maxWidth: "500px", // Optional max width for larger screens
                }}
              />
              <Typography
                variant="h5"
                align="center"
                sx={{ marginTop: 2, fontWeight: "bold", color: "#0d47a1" }}
              >
                Our Vision
              </Typography>
              <Typography align="center" sx={{ marginTop: 1 }}>
                We envision a world where every child has the opportunity to
                receive quality education and a brighter future.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 4 }}>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: "bold", color: "#0d47a1" }}
          >
            Join Us in Making a Difference
          </Typography>
          <Typography align="center" sx={{ marginTop: 1 }}>
            Together, we can empower the next generation through education. Your
            support can change lives!
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default AboutUs;
