import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  StyledBackground,
  StyledContainer,
  StyledLogo,
  StyledButtonBack,
  StyledLabelButtonBack,
  StyledIcon
} from './styles';

const imgSource = require('../../assets/images/signUp.png');

export function SignUp() {
  const navigation = useNavigation();

  return (
    <StyledBackground>
      <StyledContainer>
        <StyledLogo source={imgSource} />

        <StyledButtonBack onPress={() => navigation.goBack()}>
          <StyledLabelButtonBack>Voltar</StyledLabelButtonBack>
          <StyledIcon name='keyboard-backspace' />
        </StyledButtonBack>
      </StyledContainer>
    </StyledBackground>
  );
}
