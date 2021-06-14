import React from 'react'

import { 
    Container, 
    AreaIcon,
    AreaTitle,
    Title, 
    Icon 
} from './styles'

export function Button({onPress, ...props}) {
    return (
        <Container onPress={onPress}>
            <AreaIcon>
                <Icon name={props.nameIcon}/>      
            </AreaIcon>
            <AreaTitle>
                <Title>
                    { props && props.title }
                </Title>            
            </AreaTitle>
            
        </Container>
    )
}
