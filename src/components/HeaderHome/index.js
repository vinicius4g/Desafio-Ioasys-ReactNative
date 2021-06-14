import React from 'react'
import { 
    HeaderView, 
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    LogoutButton,
} from './styles'

export function HeaderHome({ ...props }) {
    
    return (
       <HeaderView>
            <UserWrapper> 
                <UserInfo>
                    <Photo 
                        source={{ 
                            uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' 
                        }}
                    />                    
                    <User>
                        <UserGreeting>Olá,</UserGreeting>
                        <UserName>{ props && props.title}</UserName>
                    </User>
                </UserInfo>
                <LogoutButton onPress={props.signOut}>
                    <Icon name="power"/>
                </LogoutButton>
            </UserWrapper>
       </HeaderView>
    )
}
