import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { 
    Background,
    Container,
    Logo,
    ButtonBack,
    LabelButtonBack,
    Icon
} from './styles'

export function SignUp(){
    const navigation = useNavigation()
  
    return(
        <Background>
            <Container>
                <Logo source={require('../../assets/signUp.png')} />

                <ButtonBack onPress={ () => navigation.goBack()} >
                    <LabelButtonBack>Voltar</LabelButtonBack>
                    <Icon name="keyboard-backspace"/>
                </ButtonBack>
            </Container>
        </Background>  
    )
}