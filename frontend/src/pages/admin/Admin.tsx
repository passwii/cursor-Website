import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent, Tabs, Tab, Box } from '@mui/material';
import styled from 'styled-components';
import LoginForm from './components/LoginForm';
import NewsManager from './components/NewsManager';

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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const AdminPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  
  const stats = [
    { title: '总用户数', value: '1,234' },
    { title: '活跃会话', value: '56' },
    { title: '日访问量', value: '2,345' },
    { title: '收入', value: '¥12,345' },
  ];

  const handleLogin = (success: boolean) => {
    setIsLoggedIn(success);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  if (!isLoggedIn) {
    return (
      <StyledContainer maxWidth="sm">
        <LoginForm onLogin={handleLogin} />
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        管理后台
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
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

      <Paper sx={{ width: '100%' }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="数据概览" />
          <Tab label="新闻管理" />
          <Tab label="用户管理" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" gutterBottom>
            最近活动
          </Typography>
          <Typography variant="body1">
            暂无最近活动。
          </Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <NewsManager />
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6">
            用户管理功能开发中...
          </Typography>
        </TabPanel>
      </Paper>
    </StyledContainer>
  );
};

export default AdminPage;
