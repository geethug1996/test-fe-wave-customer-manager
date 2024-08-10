
import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './styles.css'; 

const CustomerList = ({ customers, onEditClick }) => {
  return (
    <Paper elevation={3} className="paper">
      {customers.length === 0 ? (
        <Typography>No Data Available</Typography>
      ) : (
        <List>
          {customers.map(customer => (
            <ListItem button key={customer.id} className="listItem" onClick={() => onEditClick(customer)}>
              <ListItemText primary={customer.name} />
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default CustomerList;

