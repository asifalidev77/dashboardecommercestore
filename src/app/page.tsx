import { Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to My MUI + Next.js App
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
}
