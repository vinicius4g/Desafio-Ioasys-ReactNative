import React, { useState, useContext } from 'react';
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  StyledBackground,
  StyledContainer,
  StyledLogo,
  StyledAreaInput,
  StyledButtonShowPassword,
  StyledSubmitButton,
  StyledSubmitText,
  StyledButtonLink,
  StyledLinkText
} from './styles';

import { AuthContext } from '../../contexts/auth';

import { InputSignIn } from '../../components/InputSignIn';
import { Load } from '../../components/Load';

const imgSource = require('../../assets/logo_ioasys.png');

export function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePassword, setVisiblePassword] = useState(false);

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleShowPassword() {
    setVisiblePassword(!visiblePassword);
  }

  function handleLogin() {
    if (email === '') return Alert.alert('Campo email vazio 🤔');

    if (password === '') return Alert.alert('Campo senha vazio 🧐');

    return signIn(email, password);
  }

  if (loadingAuth) {
    return <Load />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StyledBackground>
        <StyledContainer
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          enabled
        >
          <StyledLogo source={imgSource} />

          <StyledAreaInput>
            <InputSignIn
              placeholder='Email'
              autoCorrect={false}
              autoCapitalize='none'
              value={email}
              onChangeText={setEmail}
            />
          </StyledAreaInput>

          <StyledAreaInput>
            <InputSignIn
              placeholder='Senha'
              autoCorrect={false}
              autoCapitalize='none'
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!visiblePassword}
            />
            <StyledButtonShowPassword onPress={handleShowPassword}>
              <Feather
                name={visiblePassword === true ? 'eye' : 'eye-off'}
                color='gray'
                size={20}
              />
            </StyledButtonShowPassword>
          </StyledAreaInput>

          <StyledSubmitButton onPress={handleLogin}>
            <StyledSubmitText>Acessar</StyledSubmitText>
          </StyledSubmitButton>

          <StyledButtonLink onPress={() => navigation.navigate('SignUp')}>
            <StyledLinkText>Criar uma conta</StyledLinkText>
          </StyledButtonLink>
        </StyledContainer>
      </StyledBackground>
    </TouchableWithoutFeedback>
  );
}
