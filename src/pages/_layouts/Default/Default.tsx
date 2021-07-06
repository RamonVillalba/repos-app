import React from 'react';

// Styles
import { Container } from './Default.styles';

const DefaultLayout: React.FC = ({ children }) => (
  <Container>{children}</Container>
);

export default DefaultLayout;
