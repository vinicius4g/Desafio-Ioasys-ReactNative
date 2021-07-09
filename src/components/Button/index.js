import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledContainer,
  StyledAreaIcon,
  StyledIcon,
  StyledAreaTitle,
  StyledTitle
} from './styles';

export function Button({ onPress, ...props }) {
  return (
    <StyledContainer onPress={onPress}>
      <StyledAreaIcon>
        <StyledIcon name={props.nameIcon} />
      </StyledAreaIcon>
      <StyledAreaTitle>
        <StyledTitle>{props && props.title}</StyledTitle>
      </StyledAreaTitle>
    </StyledContainer>
  );
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  nameIcon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
