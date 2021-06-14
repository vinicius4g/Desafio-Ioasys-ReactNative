import React from 'react'

import { 
    Wrapper,
    Container,
    Title,
    Type,
    Footer,
    Infos,
    CoutryName,
    CityName,
    Photo 
} from './styles'


export function CardEnterprise({onPress, ...props}) {
    
    let apiUri = 'https://empresas.ioasys.com.br/'
    return (
        <Wrapper onPress={onPress}>
            <Container>  
                <Title>
                    {props && props.data.enterprise_name}
                </Title>          
                <Type>
                    {props && props.data.enterprise_type.enterprise_type_name}
                </Type>       
                <Footer>
                    <Infos>
                        <CoutryName>
                            {props && props.data.country}
                        </CoutryName>
                        <CityName>
                            {props && props.data.city}
                        </CityName>
                    </Infos>    
                    {
                        props &&
                            <Photo             
                                source={{ uri: apiUri+props.data.photo }}
                            />                 
                    }
                </Footer>
            </Container>
        </Wrapper>
    )
}