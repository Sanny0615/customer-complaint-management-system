import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";

import api from "../services/api";

function ComplaintForm() {
  const [formData, setFormData] = useState({
    customer_name: "",
    product_name: "",
    batch_number: "",
    complaint_description: "",
    severity: "",
    priority: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post("/complaints/", formData);

      alert("Complaint Saved Successfully ✅");

      console.log(response.data);

      setFormData({
        customer_name: "",
        product_name: "",
        batch_number: "",
        complaint_description: "",
        severity: "",
        priority: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to Save Complaint ❌");
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight="bold">
        Log Customer Complaint
      </Typography>

      <TextField
        name="customer_name"
        label="Customer Name"
        value={formData.customer_name}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        name="product_name"
        label="Product Name"
        value={formData.product_name}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        name="batch_number"
        label="Batch Number"
        value={formData.batch_number}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        name="complaint_description"
        label="Complaint Description"
        multiline
        rows={4}
        value={formData.complaint_description}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        select
        name="severity"
        label="Severity"
        value={formData.severity}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="Low">Low</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="High">High</MenuItem>
      </TextField>

      <TextField
        select
        name="priority"
        label="Priority"
        value={formData.priority}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="Normal">Normal</MenuItem>
        <MenuItem value="Urgent">Urgent</MenuItem>
      </TextField>

      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
      >
        Save Complaint
      </Button>
    </Stack>
  );
}

export default ComplaintForm;