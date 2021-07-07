import React from 'react';
import { 
    Container,
    Animation
} from './styles';

import loadAnimation from '../../assets/load2.json'

export function Load(){
    return(
        <Container>
            <Animation 
                source={loadAnimation}
                autoPlay
                loop             
            />
        </Container>
    )
}

