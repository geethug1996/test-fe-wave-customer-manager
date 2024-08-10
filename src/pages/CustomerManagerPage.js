import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Container, Typography, Paper, List, ListItem, ListItemText, IconButton, Snackbar, Alert, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import useFetch from '../hooks/useFetch';
import '../components/styles.css';

const CustomerManagerPage = () => {
  const { data: customersData, error } = useFetch('https://waveaccounting.github.io/se-challenge-fe-customers/settings.json');
  const [customersList, setCustomersList] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channel: '',
    address: '',
    postal: '',
    city: '',
    province: ''
  });
  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (customersData) {
      setCustomersList(customersData.customers);
    }
  }, [customersData]);

  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    setFormData({
      name: customer.name || '',
      email: customer.email || '',
      channel: customer.channel || '',
      address: customer.address || '',
      postal: customer.postal || '',
      city: customer.city || '',
      province: customer.province || ''
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom>
        Customer Information
      </Typography>
      <Paper className="paper">
        {customersList?.length === 0 && <Typography>No Data Available</Typography>}
        <List>
          {customersList.map(customer => (
            <ListItem button key={customer.id} className="listItem">
              <ListItemText primary={customer.name} />
              <Tooltip title="Edit Customer Info">
              <IconButton onClick={() => handleEditClick(customer)} aria-label="edit">
                <EditIcon />
              </IconButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Paper>
      {selectedCustomer && (
        <Paper className="paper">
          <Typography variant="h6" gutterBottom>
            Edit Customer
          </Typography>
          <form onSubmit={handleSubmit} className="form">
            <div className="row">
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name && <span className="errorText">{errors.name}</span>}
                className="textField"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email && <span className="errorText">{errors.email}</span>}
                className="textField"
              />
            </div>
            <div className="row">
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                className="textField"
              />
              <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                className="textField"
              />
            </div>
            <div className='textFieldProvince'>
              <TextField
                label="Province"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                className="textField"
              />
            </div>
            <Button type="submit" variant="contained" color="primary" className="submitButton">
              Submit
            </Button>
          </form>
        </Paper>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        className="snackbar"
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Customer data printed in console. Please Check
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CustomerManagerPage;