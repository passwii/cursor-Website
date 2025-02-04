import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
}

const NewsManager: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([
    { id: 1, title: '示例新闻', content: '这是一条示例新闻内容', date: '2024-03-20' },
  ]);
  const [open, setOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState<NewsItem | null>(null);

  const handleOpen = (item?: NewsItem) => {
    setCurrentNews(item || { id: Date.now(), title: '', content: '', date: '' });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentNews(null);
  };

  const handleSave = () => {
    if (currentNews) {
      if (news.find(item => item.id === currentNews.id)) {
        setNews(news.map(item => 
          item.id === currentNews.id ? currentNews : item
        ));
      } else {
        setNews([...news, currentNews]);
      }
    }
    handleClose();
  };

  const handleDelete = (id: number) => {
    setNews(news.filter(item => item.id !== id));
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        添加新闻
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>标题</TableCell>
              <TableCell>日期</TableCell>
              <TableCell>操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {news.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpen(item)}>编辑</Button>
                  <Button color="error" onClick={() => handleDelete(item.id)}>
                    删除
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentNews?.id ? '编辑新闻' : '添加新闻'}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="标题"
            value={currentNews?.title || ''}
            onChange={(e) => setCurrentNews(prev => 
              prev ? { ...prev, title: e.target.value } : null
            )}
            sx={{ mt: 2, mb: 2 }}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="内容"
            value={currentNews?.content || ''}
            onChange={(e) => setCurrentNews(prev => 
              prev ? { ...prev, content: e.target.value } : null
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleSave} variant="contained">
            保存
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewsManager; 