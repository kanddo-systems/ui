import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => (
  <Card title="Card Title">
    This is a simple card component created with styled-components.
  </Card>
);

export const CustomTitle = () => (
  <Card title="Custom Card Title">
    You can customize the title and the content of the card by passing different props.
  </Card>
);

export const CustomContent = () => (
  <Card title="Custom Content Card">
    <strong>Bold content:</strong> This is a more complex structure passed as children.
  </Card>
);
