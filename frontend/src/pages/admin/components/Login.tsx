import React, { useState, useEffect } from 'react';
import { Container, Paper, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import * as analytics from '../../../utils/analytics';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogin = () => {
    if (username === 'damon' && password === 'rock2025') {
      localStorage.setItem('isAuthenticated', 'true');
      analytics.event({
        action: 'login',
        category: 'user',
        label: 'login_success'
      });
      navigate('/admin');
    } else {
      analytics.event({
        action: 'login',
        category: 'user',
        label: 'login_failed'
      });
      setError('用户名或密码错误');
    }
  };

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Paper elevation={3} className={styles.paper}>
        <Typography variant="h5" gutterBottom align="center">
          管理员登录
        </Typography>
        <Box component="form" className={styles.form}>
          <TextField
            fullWidth
            label="用户名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            error={!!error}
          />
          <TextField
            fullWidth
            label="密码"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            error={!!error}
          />
          {error && (
            <Typography color="error" variant="body2" align="center">
              {error}
            </Typography>
          )}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            className={styles.button}
          >
            登录
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login; 