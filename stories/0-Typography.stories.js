import React from 'react';
import Typography from '../src/components/Typography';

export default {
  title: 'Typography',
  component: Typography,
};

export const Title = () => <Typography title>Title</Typography>;

export const Paragraph = () => <Typography paragraph>Paragraph</Typography>;

export const Text = () => <Typography>Text</Typography>;
