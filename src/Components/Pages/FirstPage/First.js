import React from "react";
import { Button, Card, CardContent, Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import image1 from "../../Images/ImagesFirst.jpg";

function First() {
  return (
    <Box
      className="relative h-screen"
      sx={{ height: "auto", width: "100%", mt: 15 }}
    >
      <img
        src={image1}
        alt="img"
        style={{
          height: "750px",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: "5%", md: "8%" },
          transform: "translateY(-50%)",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          textAlign: { xs: "center", md: "left" },
          px: { xs: 2, md: 0 }, // Add padding for smaller screens
        }}
      >
        <Box sx={{ marginTop: 10 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "bold",
              color: "white",
              fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
            }}
          >
            <span style={{ color: "blue" }}>People</span> Centered
            <br />
            Education Trust
          </Typography>
          <Fab
            variant="extended"
            size="medium"
            color="primary"
            sx={{ fontFamily: "'Poppins', sans-serif", mt: 2 }}
          >
            <NavigationIcon sx={{ mr: 1 }} />
            Love never fails ~ | Corinthians 13:8
          </Fab>
        </Box>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          {["We share", "We support", "We empower"].map((text, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                  borderRadius: "8px", // Added border radius for better aesthetics
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: "bold",
                      color: "lightblue",
                    }}
                  >
                    {text}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Demonstrated impactful community engagement by efficiently
                    coordinating the distribution of 90.545 pounds of essential
                    food resources.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default First;
