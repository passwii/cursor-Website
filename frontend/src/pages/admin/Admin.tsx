import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent, Tabs, Tab, Box } from '@mui/material';
import styled from 'styled-components';
import styles from './Admin.module.css';



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
    <div 
      hidden={value !== index}
      className={value === index ? styles.fadeIn : ''}
      {...other}
    >
      {value === index && (
        <Box className={styles.tabPanel}>
          {children}
        </Box>
      )}
    </div>
  );
};

const AdminPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  
  const stats = [
    { title: '总用户数', value: '1,234' },
    { title: '活跃会话', value: '156' },
    { title: '日访问量', value: '2,345' },
    { title: '销售收入', value: '$122,345' },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        管理后台
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledCard className={styles.statsCard}>
              <CardContent>
                <Typography className={styles.statsTitle} gutterBottom>
                  {stat.title}
                </Typography>
                <Typography className={styles.statsValue} component="div">
                  {stat.value}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ width: '100%' }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="BLF工具" />
          <Tab label="数据分析" />
          <Tab label="数据概览" />
          <Tab label="用户管理" />

        </Tabs>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6">
            数据功能开发中...
          </Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography variant="h6">
            用户管理功能开发中...
          </Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={styles.toolCard} onClick={() => window.open('https://ai.believeboy.com', '_blank')}>
                <CardContent className={styles.toolCardContent}>
                  <Typography className={styles.toolTitle} variant="h6">
                    AI 实验室
                  </Typography>
                  <Typography className={styles.toolDescription}>
                    探索 AI 技术的前沿应用
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Card className={styles.toolCard} onClick={() => window.open('https://fba.believeboy.com', '_blank')}>
                <CardContent className={styles.toolCardContent}>
                  <Typography className={styles.toolTitle} variant="h6">
                    FBA 标签处理
                  </Typography>
                  <Typography className={styles.toolDescription}>
                    高效的 FBA 标签管理工具
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Card className={styles.toolCard} onClick={() => window.open('https://exchange.believeboy.com', '_blank')}>
                <CardContent className={styles.toolCardContent}>
                  <Typography className={styles.toolTitle} variant="h6">
                    汇率动态
                  </Typography>
                  <Typography className={styles.toolDescription}>
                    实时汇率查询与监控
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={styles.toolCard} onClick={() => window.open('https://dailyreport.believeboy.com', '_blank')}>
                <CardContent className={styles.toolCardContent}>
                  <Typography className={styles.toolTitle} variant="h6">
                    日报系统
                  </Typography>
                  <Typography className={styles.toolDescription}>
                    每日业务数据追踪与分析
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={styles.toolCard} onClick={() => window.open('https://monthlyreport.believeboy.com', '_blank')}>
                <CardContent className={styles.toolCardContent}>
                  <Typography className={styles.toolTitle} variant="h6">
                    月报系统
                  </Typography>
                  <Typography className={styles.toolDescription}>
                    月度经营数据汇总与分析
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={styles.toolCard} onClick={() => window.open('https://productanalysis.believeboy.com', '_blank')}>
                <CardContent className={styles.toolCardContent}>
                  <Typography className={styles.toolTitle} variant="h6">
                    产品分析
                  </Typography>
                  <Typography className={styles.toolDescription}>
                    SKU数据深度分析与洞察
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={styles.toolCard} onClick={() => window.open('https://projectanalysis.believeboy.com', '_blank')}>
                <CardContent className={styles.toolCardContent}>
                  <Typography className={styles.toolTitle} variant="h6">
                    项目核算表
                  </Typography>
                  <Typography className={styles.toolDescription}>
                    项目成本与收益分析
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card className={styles.toolCard} onClick={() => window.open('https://inventory.believeboy.com', '_blank')}>
                <CardContent className={styles.toolCardContent}>
                  <Typography className={styles.toolTitle} variant="h6">
                    库存管理
                  </Typography>
                  <Typography className={styles.toolDescription}>
                    实时库存监控与管理
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </StyledContainer>
  );
};

export default AdminPage;
