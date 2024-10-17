import React from "react";
import {
  Button,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import image from "../Images/children.jpg"; // Ensure this path is correct

const Card = () => {
  const data = [
    "Mobile Food Pantry 2024",
    "North Texas Giving Day 2023",
    "Cultural Diversity Showcase 2023",
    "All Kids Got Talent 2022",
    "HalloReach 2022",
    "Back 2 School 2022",
    "PCL Anniversary Celebration",
    "Dr. Colby's May 2024 Trip to Israel",
    "Will Be Here Before You Know It!",
    "Cultural Talk Show (Video)",
  ];

  return (
    <Grid
      container
      spacing={4}
      sx={{ padding: 2, marginTop: { xs: 5, md: 20 } }}
    >
      {/* Main Post Section */}
      <Grid item xs={12} md={6}>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <img
            src={image}
            alt="Mobile Food Pantry"
            style={{
              width: "100%",
              maxWidth: "600px",
              border: "5px solid #ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          <Typography
            sx={{
              mt: 2,
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            January 11, 2024
          </Typography>
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
            Mobile Food Pantry 2024
          </Typography>
          <Typography sx={{ mt: 1, px: 2 }}>
            PCL partnered with North Texas Food Bank and Upendo Baptist Church
            to hold a mobile food pantry at the church.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }} color="primary">
            Read More
          </Button>
        </Box>
      </Grid>

      {/* Latest Posts Section */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          sx={{ mb: 2 }}
        >
          Latest Posts
        </Typography>
        <Box
          sx={{
            border: "2px solid #9e9e9e",
            borderRadius: "10px",
            boxShadow: 3,
            p: 2,
            height: "100%",
          }}
        >
          <List>
            {data.map((post, index) => (
              <ListItem key={index}>
                <ListItemText primary={post} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>

      {/* Repeated Posts Section */}
      {data.slice(0, 3).map((_, index) => (
        <Grid item xs={12} md={6} key={index} sx={{ mt: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={image}
              alt={`Event ${index + 1}`}
              style={{
                width: "100%",
                maxWidth: "600px",
                border: "5px solid #ffffff",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
            <Typography
              sx={{
                mt: 2,
                fontWeight: "bold",
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              January 11, 2024
            </Typography>
            <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
              Mobile Food Pantry 2024
            </Typography>
            <Typography sx={{ mt: 1, px: 2 }}>
              PCL partnered with North Texas Food Bank and Upendo Baptist Church
              to hold a mobile food pantry at the church.
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }} color="primary">
              Read More
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Card;
