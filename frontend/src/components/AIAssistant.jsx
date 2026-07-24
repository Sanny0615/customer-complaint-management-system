import { useState } from "react";
import {
  Typography,
  Button,
  Stack,
  TextField,
  Paper,
} from "@mui/material";

import api from "../services/api";

function AIAssistant() {
  const [complaintText, setComplaintText] = useState("");

  const [result, setResult] = useState(null);

  const extractAI = async () => {
    try {
      const response = await api.post("/complaints/extract", {
        complaint_text: complaintText,
      });

      setResult(response.data.data);

    } catch (error) {
      console.error(error);
      alert("AI Extraction Failed");
    }
  };

  return (
    <Stack spacing={3}>

      <Typography variant="h6" fontWeight="bold">
        AI Assistant
      </Typography>

      <TextField
        label="Paste Complaint"
        multiline
        rows={5}
        value={complaintText}
        onChange={(e) => setComplaintText(e.target.value)}
      />

      <Button
        variant="contained"
        onClick={extractAI}
      >
        Extract with AI
      </Button>

      {result && (
        <Paper sx={{ p: 2 }}>

          <Typography>
            <b>Customer:</b> {result.customer_name}
          </Typography>

          <Typography>
            <b>Product:</b> {result.product_name}
          </Typography>

          <Typography>
            <b>Batch:</b> {result.batch_number}
          </Typography>

          <Typography>
            <b>Description:</b> {result.complaint_description}
          </Typography>

          <Typography>
            <b>Severity:</b> {result.severity}
          </Typography>

          <Typography>
            <b>Priority:</b> {result.priority}
          </Typography>

        </Paper>
      )}

    </Stack>
  );
}

export default AIAssistant;