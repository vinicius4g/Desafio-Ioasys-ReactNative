import React from 'react';
import { StyledContainer } from './styles';

export function Input({ ...props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledContainer {...props} />;
}
