import {
  Grid,
  Paper,
  Typography,
  Box,
} from "@mui/material";

import ComplaintForm from "../components/ComplaintForm";
import AIAssistant from "../components/AIAssistant";

function Dashboard() {
  return (
    <Box sx={{ background: "#f5f7fb", minHeight: "100vh", p: 3 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Customer Complaint Management System
      </Typography>

      <Typography
        color="text.secondary"
        mb={3}
      >
        AI Powered Complaint Management
      </Typography>

      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 3 }}>
            <ComplaintForm />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3 }}>
            <AIAssistant />
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Dashboard;