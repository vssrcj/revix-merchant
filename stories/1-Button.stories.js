import React from 'react';
import Button from '../src/components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button>Default</Button>;

export const Disabled = () => (
  <Button disabled>Disabled</Button>
);
