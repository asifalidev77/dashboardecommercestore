"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Box,
  Grid,
  Container,
  Paper,
  Drawer,
  Tabs,
  Tab,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Switch,
  Snackbar,
  Alert,
  CircularProgress,
  LinearProgress,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Container>
      <h1>Hello This is my MUI</h1>
    <Button
    color="secondary"
    variant="contained"
    startIcon={<DeleteIcon />}
    >Click Me</Button>
    <Checkbox/>
    </Container>
  );
}
