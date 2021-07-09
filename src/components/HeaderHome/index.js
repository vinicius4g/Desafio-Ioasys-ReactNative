import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledHeaderView,
  StyledUserWrapper,
  StyledUserInfo,
  StyledPhoto,
  StyledUser,
  StyledUserGreeting,
  StyledUserName,
  StyledLogoutButton,
  StyledIcon
} from './styles';

export function HeaderHome({ ...props }) {
  return (
    <StyledHeaderView>
      <StyledUserWrapper>
        <StyledUserInfo>
          <StyledPhoto
            source={{
              uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
            }}
          />
          <StyledUser>
            <StyledUserGreeting>Olá,</StyledUserGreeting>
            <StyledUserName>{props && props.title}</StyledUserName>
          </StyledUser>
        </StyledUserInfo>
        <StyledLogoutButton onPress={props.signOut}>
          <StyledIcon name='power' />
        </StyledLogoutButton>
      </StyledUserWrapper>
    </StyledHeaderView>
  );
}

HeaderHome.propTypes = {
  title: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired
};
