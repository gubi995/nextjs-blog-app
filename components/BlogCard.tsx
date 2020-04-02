import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, styled, CardMedia, Chip } from '@material-ui/core';

import { Blog } from '../models/blog';
import { toReadableDate } from '../utils/date';

const StyledCard = styled(Card)(({ theme }) => ({ maxWidth: 345, margin: theme.spacing(2) }));

const StyledCardMedia = styled(CardMedia)({ height: 140 });

const StyledCardActions = styled(CardActions)({ display: 'flex', justifyContent: 'center' });

const StyledChip = styled(Chip)(({ theme }) => ({ marginBottom: theme.spacing(1) }));

interface Props {
  blog: Blog;
  onClick: () => void;
}

const BlogCard = ({ blog, onClick }: Props) => {
  return (
    <StyledCard>
      <StyledCardMedia image={blog.image.url} />
      <CardContent>
        <Typography color="primary" gutterBottom variant="h5" component="h2">
          {blog.title}
        </Typography>
        <StyledChip color="primary" size="small" label={toReadableDate(blog.createdAt)} variant="outlined" />
        <Typography color="primary" variant="body2" component="p">
          {blog.introduction}
        </Typography>
      </CardContent>
      <StyledCardActions>
        <Button variant="outlined" color="primary" onClick={onClick}>
          View post
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};

export default BlogCard;
