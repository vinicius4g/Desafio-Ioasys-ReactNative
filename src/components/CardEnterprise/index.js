import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledWrapper,
  StyledContainer,
  StyledTitle,
  StyledType,
  StyledFooter,
  StyledInfos,
  StyledCoutryName,
  StyledCityName,
  StyledPhoto
} from './styles';

export function CardEnterprise({ onPress, ...props }) {
  const apiUri = 'https://empresas.ioasys.com.br/';
  return (
    <StyledWrapper onPress={onPress}>
      <StyledContainer>
        <StyledTitle>{props && props.data.enterprise_name}</StyledTitle>
        <StyledType>
          {props && props.data.enterprise_type.enterprise_type_name}
        </StyledType>
        <StyledFooter>
          <StyledInfos>
            <StyledCoutryName>{props && props.data.country}</StyledCoutryName>
            <StyledCityName>{props && props.data.city}</StyledCityName>
          </StyledInfos>
          {props && <StyledPhoto source={{ uri: apiUri + props.data.photo }} />}
        </StyledFooter>
      </StyledContainer>
    </StyledWrapper>
  );
}

CardEnterprise.propTypes = {
  onPress: PropTypes.func.isRequired,
  data: PropTypes.shape({
    enterprise_name: PropTypes.string,
    enterprise_type: PropTypes.shape({
      enterprise_type_name: PropTypes.string.isRequired
    }),
    country: PropTypes.string,
    city: PropTypes.string,
    photo: PropTypes.string
  })
};

CardEnterprise.defaultProps = {
  data: PropTypes.shape({
    enterprise_name: PropTypes.string,
    enterprise_type: PropTypes.shape({
      enterprise_type_name: PropTypes.string.isRequired
    }),
    country: PropTypes.string,
    city: PropTypes.string,
    photo: PropTypes.string
  })
};
