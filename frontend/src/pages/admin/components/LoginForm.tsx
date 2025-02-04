import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Box } from '@mui/material';
import styled from 'styled-components';

interface LoginFormProps {
  onLogin: (success: boolean) => void;
}

const StyledPaper = styled(Paper)`
  padding: 2rem;
`;

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里应该调用实际的登录 API
    if (username === 'admin' && password === 'password') {
      onLogin(true);
    } else {
      alert('用户名或密码错误');
    }
  };

  return (
    <StyledPaper>
      <Typography variant="h5" gutterBottom>
        管理员登录
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="用户名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            type="password"
            label="密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
        >
          登录
        </Button>
      </form>
    </StyledPaper>
  );
};

export default LoginForm; 