import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Typography,
  IconButton,
  TextField,
  Toolbar,
  useMediaQuery,
  InputAdornment,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

function Heading() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens
  const [mobileOpen, setMobileOpen] = useState(false); // State for mobile menu

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); // Toggle mobile menu open/close
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Our Work", path: "/ourwork" },
    { text: "Donate", path: "/donate" },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <Typography variant="h5" sx={{ textAlign: "center", my: 2 }}>
        EDUCATION TRUST
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* Social Media Icons */}
      <Box display="flex" justifyContent="center" my={2}>
        <IconButton>
          <FacebookIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton>
          <TwitterIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton>
          <InstagramIcon sx={{ color: "black" }} />
        </IconButton>
      </Box>
      {/* Contact Info */}
      <Box textAlign="center" mt={2}>
        <Typography variant="body2">+91 212-115-1565</Typography>
        <Typography variant="body2">WWW.Xyz.com</Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white", // White background
          color: "black",
          boxShadow: "none", // Remove shadow for a sleek look
          width: "100%", // Make sure the app bar is full width
        }}
      >
        {/* Top Section with Title and Contact Info */}
        <Toolbar
          sx={{
            justifyContent: isMobile ? "space-between" : "space-between",
            padding: isMobile ? "10px 20px" : "10px 50px", // Adjust padding for mobile
            flexDirection: isMobile ? "row" : "row", // Stack content vertically on mobile
          }}
        >
          {/* Logo or Title */}
          <Typography
            variant={isMobile ? "h5" : "h3"}
            sx={{ flexGrow: 1, textAlign: isMobile ? "center" : "left" }}
          >
            EDUCATION TRUST
          </Typography>

          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box display="flex" alignItems="center">
              <IconButton>
                <FacebookIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={{ color: "black" }} />
              </IconButton>
              {/* Contact Info */}
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "right",
                  ml: 2,
                  color: "black",
                }}
              >
                <Typography variant="body2">+91 212-115-1565</Typography>
                <Typography variant="body2">WWW.Xyz.com</Typography>
              </Button>
            </Box>
          )}
        </Toolbar>

        {/* Navigation Bar for non-mobile */}
        {!isMobile && (
          <Toolbar
            sx={{
              justifyContent: "space-between",
              padding: "10px 50px",
              backgroundColor: "rgba(0, 0, 0, 0.7)", // Transparent black background
              borderRadius: "30px", // Adjust rounded corners for mobile
              margin: "0 50px", // Spacing from sides for larger screens
            }}
          >
            {/* Navigation Links */}
            <Box display="flex" justifyContent="center" flexGrow={1}>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  component={Link} // Use Link for routing
                  to={item.path} // Set path for routing
                  color="inherit"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontSize: "1rem",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    margin: "0 10px", // Adjust margin for mobile
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            {/* Search Field */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#333", // Dark background for search
                borderRadius: "30px",
                padding: "5px 15px",
                marginLeft: "auto",
              }}
            >
              <TextField
                variant="standard"
                placeholder="Search"
                InputProps={{
                  disableUnderline: true, // No underline
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "white" }} />
                    </InputAdornment>
                  ),
                  sx: {
                    color: "white", // White text color
                  },
                }}
                sx={{
                  width: "200px", // Fixed width for non-mobile screens
                }}
              />
            </Box>
          </Toolbar>
        )}
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}

export default Heading;
