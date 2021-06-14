import React, { useState, useContext } from 'react'
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
    SubmitButton,
    SubmitText,
    Link,
    LinkText,
} from './styles'

import { Input } from '../../components/Input'


export function SignIn(){
    const navigation = useNavigation()
    
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    const { signIn} = useContext(AuthContext)

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
                        <Input 
                            placeholder="Email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                            autoCorrect={false}
                        />
                    </AreaInput>

                    <AreaInput>
                        <Input 
                            placeholder="Senha"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
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