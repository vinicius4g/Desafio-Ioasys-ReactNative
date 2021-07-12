import React from 'react';
import { StyledContainer, StyledAnimation } from './styles';

import loadAnimation from '../../assets/loadings/load2.json';

export function Load() {
  return (
    <StyledContainer>
      <StyledAnimation source={loadAnimation} autoPlay loop />
    </StyledContainer>
  );
}
