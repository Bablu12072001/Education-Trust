import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import image1 from "../../Images/img1.jpg";
import image2 from "../../Images/children.jpg";
import image3 from "../../Images/img2.webp";
import CallMadeIcon from "@mui/icons-material/CallMade";

function Blog() {
  return (
    <Box
      sx={{
        margin: { xs: "16px", md: "24px" },
        padding: { xs: "16px", md: "28px" },
      }}
    >
      <Typography fontWeight="bold" variant="h5">
        While you are there,
        <br />
        have a look at our latest articles
        <hr style={{ borderColor: "gray" }} />
      </Typography>
      <Typography sx={{ color: "blue", display: "flex", alignItems: "center" }}>
        Check our blog <CallMadeIcon sx={{ ml: 1 }} />
      </Typography>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={image1}
                alt="Mobile food pantry"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </CardContent>
            <Typography fontWeight="bold" align="center">
              Mobile Food Pantry
            </Typography>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={image2}
                alt="North Texas Giving Day 2023"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </CardContent>
            <Typography fontWeight="bold" align="center">
              North Texas Giving Day 2023
            </Typography>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={image3}
                alt="Back 2 School 2023"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </CardContent>
            <Typography fontWeight="bold" align="center">
              Back 2 School 2023
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Blog;
