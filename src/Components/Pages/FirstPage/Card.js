import React from "react";
import { Typography, Box, Grid, CardContent } from "@mui/material";

function MissionCard() {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: { xs: "20px", md: "40px" }, // Responsive padding
        backgroundColor: "rgba(255, 255, 255, 0.9)", // Slight background for readability
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        margin: { xs: "10px", md: "20px" }, // Responsive margin
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
      >
        our
        <span style={{ color: "blue" }}> #Mission</span>
      </Typography>
      <Typography
        sx={{
          marginLeft: { xs: "0", md: "6px" }, // Adjust margin for smaller screens
          textAlign: "center",
          fontSize: { xs: "1rem", md: "1.25rem" }, // Responsive font size
        }}
      >
        One of the greatest gifts that any human being could possibly receive is
        the gift of knowledge and enlightenment, and that is precisely what
        education does. Not only does education ignite the spark within a raw
        mind, but it also enables one to be a productive member of society and
        the economy alike. Due to the lack of access to education, however, a
        large section of the Indian population remains deprived of education,
        which is why donations for children’s education are incredibly
        important.
      </Typography>
    </Box>
  );
}

export default MissionCard;
