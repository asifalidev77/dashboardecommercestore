"use client";
import { useState } from "react";
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Typography, Box, Badge } from "@mui/material";
import { ShoppingCart, Search, FavoriteBorder } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileMenu, setMobileMenu] = useState<null | HTMLElement>(null);
  
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setMobileMenu(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMenu(null);
    };
  
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "black", px: 2 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Image src="/gomax-logo-2.svg" alt="logo" width={40} height={40} />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {["Demos", "Shop", "Pages", "Blog", "Portfolio", "Elements"].map((item) => (
            <Button
              key={item}
              sx={{ color: "white", textTransform: "none" }}
              onClick={handleMenuOpen}
            >
              {item} ⌄
            </Button>
          ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton sx={{ color: "white" }}>
            <Search />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <FavoriteBorder />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <Badge badgeContent={0} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #ff0080, #7928ca)",
            ml: 2,
            textTransform: "none",
            color: "white",
            "&:hover": { background: "linear-gradient(90deg, #e60073, #6724b8)" },
          }}
        >
          Buy GOMAX →
        </Button>
        <IconButton sx={{ color: "white", display: { md: "none" } }} onClick={handleMobileMenuOpen}>
          <MenuIcon />
        </IconButton>
        </Toolbar>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {["Option 1", "Option 2", "Option 3"].map((option) => (
          <MenuItem key={option} onClick={handleMenuClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>

      {/* Mobile Menu */}
      <Menu anchorEl={mobileMenu} open={Boolean(mobileMenu)} onClose={handleMobileMenuClose}>
        {["Demos", "Shop", "Pages", "Blog", "Portfolio", "Elements"].map((item) => (
          <MenuItem key={item} onClick={handleMobileMenuClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
      </AppBar>
    </>
  );
};
export default Navbar;