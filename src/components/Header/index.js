import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeaderView, StyledTitle } from './styles';

export function Header({ ...props }) {
  return (
    <StyledHeaderView>
      <StyledTitle>{props && props.title}</StyledTitle>
    </StyledHeaderView>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};
