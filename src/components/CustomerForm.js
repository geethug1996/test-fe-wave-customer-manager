import React from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Typography, Paper, Snackbar, Alert } from '@mui/material';
import './styles.css'; 

const CustomerForm = ({ formData, onInputChange, onSubmit, onSnackbarClose, snackbarOpen, errors }) => {
  return (
    <Paper elevation={3} className="paper">
      <Typography variant="h6" gutterBottom>Edit Customer</Typography>
      <form onSubmit={onSubmit} className="form">
        <div className="row">
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name}
            className="textField"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onInputChange}
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
            className="textField"
          />
        </div>
        <div className="row">
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={onInputChange}
            fullWidth
            margin="normal"
            className="textField"
          />
        </div>
        <div className="row">
          <FormControl fullWidth margin="normal">
            <InputLabel>Channel</InputLabel>
            <Select
              name="channel"
              value={formData.channel}
              onChange={onInputChange}
              className="selectField"
            >
              <MenuItem value="website">Website</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="phone">Phone</MenuItem>
              <MenuItem value="word-of-mouth">Word of Mouth</MenuItem>
              <MenuItem value="other">Other</MenuItem>
              <MenuItem value="unknown">Unknown</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="row">
          <TextField
            label="Postal"
            name="postal"
            value={formData.postal}
            onChange={onInputChange}
            fullWidth
            margin="normal"
            className="textField"
          />
          <TextField
            label="City"
            name="city"
            value={formData.city}
            onChange={onInputChange}
            fullWidth
            margin="normal"
            className="textField"
          />
        </div>
        <div className="textFieldProvince">
          <TextField
            label="Province"
            name="province"
            value={formData.province}
            onChange={onInputChange}
            fullWidth
            margin="normal"
            className="textField"
          />
        </div>
        <Button type="submit" variant="contained" color="primary" className="submitButton">
          Submit
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={onSnackbarClose}
        className="snackbar"
      >
        <Alert onClose={onSnackbarClose} severity="success">
          Customer data printed in console. Please check.
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default CustomerForm;

