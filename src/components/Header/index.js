import React from 'react'
import { HeaderView, Title } from './styles'

export function Header({ ...props }) {
    return (
       <HeaderView>
           <Title>
               {props && props.title}
            </Title>
       </HeaderView>
    )
}
