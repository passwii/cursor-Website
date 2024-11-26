import React from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const StyledCard = styled(Card)`
  height: 100%;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const AdminPage: React.FC = () => {
  const stats = [
    { title: 'Total Users', value: '1,234' },
    { title: 'Active Sessions', value: '56' },
    { title: 'Daily Views', value: '2,345' },
    { title: 'Revenue', value: '$12,345' },
  ];

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledCard>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography variant="h5" component="div">
                  {stat.value}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ marginTop: 4, padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>
        <Typography variant="body1">
          No recent activity to display.
        </Typography>
      </Paper>
    </StyledContainer>
  );
};

export default AdminPage;
