import React, { useState, useContext } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'

import { 
    Platform, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Alert
} from 'react-native'

import { 
    Background,
    Container,
    Logo,
    AreaInput,
    AreaInputIcon,
    ButtonShowPassword,
    SubmitButton,
    SubmitText,
    Link,
    LinkText,
} from './styles'


import { InputSignIn } from '../../components/InputSignIn'


export function SignIn(){
    const navigation = useNavigation()
    
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    const [visiblePassword, setVisiblePassword] = useState(true)

    const { signIn} = useContext(AuthContext)

    function handleShowPassword(){
        setVisiblePassword(!visiblePassword)
    }

    function handleLogin(){
        if(email === '')
            return Alert.alert('Campo email vazio 🤔')

        if(password === '')
            return Alert.alert('Campo senha vazio 🧐')

        signIn(email, password)
    }
   
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <Background>
                <Container
                    behavior={Platform.OS === 'ios' ? 'padding' : ''}
                    enabled
                >
                    <Logo source={require('../../assets/logo_ioasys.png')} />

                    <AreaInput>
                        <InputSignIn 
                            placeholder="Email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            autoCorrect={false}
                        />
                        <AreaInputIcon>
                            <Feather
                                name="user"
                                color="gray"
                                size={20}
                            />	 
                        </AreaInputIcon>
                    </AreaInput>

                    <AreaInput>
                        <InputSignIn 
                            placeholder="Senha"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={visiblePassword}
                        />
                        <ButtonShowPassword onPress={handleShowPassword}>
                            <Feather
                                name={visiblePassword === true ? "eye" : "eye-off"}
                                color="gray"
                                size={20}
                            />	 
                        </ButtonShowPassword>
                    </AreaInput>

                    <SubmitButton onPress={handleLogin}>
                        <SubmitText>Acessar</SubmitText>                 
                    </SubmitButton>
                    
                    <Link onPress={ () => navigation.navigate('SignUp') } >
                        <LinkText>Criar uma conta</LinkText>
                    </Link>    
            
                </Container>
            </Background>
        </TouchableWithoutFeedback>
    )
}