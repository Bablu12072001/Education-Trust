import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import image from "../../Images/img3.jpeg";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Carding() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        background: "linear-gradient(to right, #90caf9, #0d47a1)",
        color: "white",
        padding: { xs: 2, md: 4 },
      }}
    >
      {/* Right Side: Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src={image}
          alt="img"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            border: "5px solid #ffffff",
            borderRadius: "10px",
          }}
        />
      </Grid>
      {/* Left Side: Paragraph */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: { xs: "center", md: "left" }, marginBottom: 2 }}
        >
          Above clothe yourself with love which lies everything in unity
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          Colossians 3:14
        </Typography>
      </Grid>

      {/* Additional Information Section */}
      <Grid
        container
        spacing={2}
        sx={{
          background: "#121858",
          borderRadius: "20px",
          margin: { xs: 2, md: 4 },
          padding: 2,
        }}
      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" align="center">
            <Diversity1Icon fontSize="large" /> What we do
          </Typography>
          <Typography align="center">
            A non-profit supporting the underprivileged while sharing the good
            news of Jesus Christ
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" align="center">
            <AssignmentIcon fontSize="large" /> What we do
          </Typography>
          <Typography align="center">
            A non-profit supporting the underprivileged while sharing the good
            news of Jesus Christ
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" align="center">
            <CheckCircleIcon fontSize="large" /> What we do
          </Typography>
          <Typography align="center">
            A non-profit supporting the underprivileged while sharing the good
            news of Jesus Christ
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Carding;
