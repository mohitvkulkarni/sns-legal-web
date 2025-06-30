import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const ArticleContent = styled(Box)(({ theme }) => ({
  '& h3': {
    ...theme.typography.h4,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  '& p': {
    ...theme.typography.body1,
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  '& ol, & ul': {
    paddingLeft: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  '& li': {
     ...theme.typography.body1,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
  '& strong': {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const BlogDetailPage = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const post = BLOG_POSTS.find(p => p.id === blogId);

  if (!post) {
    return (
      <Container sx={{ textAlign: 'center', py: 12 }}>
        <Typography variant="h4" gutterBottom>Blog post not found.</Typography>
        <Link component={RouterLink} to="/blog" variant="h6">Back to Blog</Link>
      </Container>
    );
  }

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <article>
          <Box component="header" sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" component="h1" gutterBottom>{post.title}</Typography>
            <Typography variant="h5" color="text.secondary" sx={{ fontStyle: 'italic', mt: 3 }}>
              "{post.quote}"
            </Typography>
          </Box>
          
          <ArticleContent>
            {post.content}
          </ArticleContent>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Link component={RouterLink} to="/blog" variant="button" sx={{ color: 'secondary.main', textDecoration: 'none', fontSize: '1rem' }}>
              &larr; Back to all articles
            </Link>
          </Box>
        </article>
      </Container>
    </Box>
  );
};

export default BlogDetailPage;