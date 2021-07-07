import React, { useContext } from 'react'

import { SearchContext } from '../../contexts/search'

import { 
    Wrapper,
    Container, 
    EnterpriseView,
    Label,
    Name,
    PlaceView,
    NameCountry,
    NameCity,
    DescriptionView,
    LabelDescription,
    DescriptionText,
    EnterprisePhotoView,
    PhotoSpace,
    Photo
} from './styles'

import { Header } from '../../components/Header'
import { Load } from '../../components/Load'

export function Detail() {
    const { enterpriseDetail, loadingSearch  } = useContext(SearchContext)
    let apiUri = 'https://empresas.ioasys.com.br/'

    if(loadingSearch){
        return (
            <Load />
        )
    }
    else if(enterpriseDetail === undefined){
        return(
            <Container>
                <Header title={'Detalhes da Empresa'}/>
                <EnterpriseView>
                    <Label>Nenhuma empresa selecionada  😅</Label> 
                    
                </EnterpriseView>
            </Container>
            
        )
    }
    else if(enterpriseDetail !== undefined){
        return (
            <Wrapper>
                <Container>
                    <Header title={'Detalhes da Empresa'}/>
                    
                    <EnterpriseView>
                        <Label>Nome: </Label> 
                        <Name>{enterpriseDetail.enterprise.enterprise_name}</Name>
                    </EnterpriseView>
                    
                    <PlaceView>
                        <NameCountry>País: </NameCountry> 
                        <Name>{enterpriseDetail.enterprise.country}</Name>
                        <NameCity>Cidade: </NameCity> 
                        <Name>{enterpriseDetail.enterprise.city}</Name>
                    </PlaceView>
                    
                    <DescriptionView>
                        <LabelDescription>Descrição da Empresa: </LabelDescription>  
                        <DescriptionText>{enterpriseDetail.enterprise.description}</DescriptionText>               
                    </DescriptionView>
                   
                    <EnterprisePhotoView>
                        <Label>Foto disponibilizada:</Label> 
                        <PhotoSpace>
                            { enterpriseDetail && 
                                <Photo 
                                    source={{ uri: apiUri+enterpriseDetail.enterprise.photo }}
                                />                       
                            }
                        </PhotoSpace>
                    </EnterprisePhotoView>
                    
                </Container>
            </Wrapper>
        )
    }
}
