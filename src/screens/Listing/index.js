import React, { useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../contexts/auth'
import { SearchContext } from '../../contexts/search'

import { 
    Container, 
    TitleList,
    FlatListCards
} from './styles'

import { HeaderHome } from '../../components/HeaderHome'
import { CardEnterprise } from '../../components/CardEnterprise'
import { Load } from '../../components/Load'

export function Listing() {
    const navigation = useNavigation()
    const { user, signOut } = useContext(AuthContext)
    const { searchShowEnterprises, enterprises, searchShowDetail, loadingSearch} = useContext(SearchContext)

    let userName = ''
    if(user){
        userName = user.investor.investor_name
    }

    useEffect(() => {
        searchShowEnterprises()
    },[])

    function handleDetails(id){  
        searchShowDetail(id)
        navigation.navigate('Detalhes')
    }

    if(loadingSearch){
        return(
            <Load />
        )
    }
    
    return (
        <Container>
            <HeaderHome title={userName} signOut={signOut}/>
            <TitleList>Todas as empresas cadstradas</TitleList> 
            
            { enterprises &&
                <FlatListCards 
                    data={enterprises.enterprises}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <CardEnterprise 
                            data={item}
                            onPress={() => handleDetails(item.id)}
                        />                  
                    )}        
                   
                />
            }
        </Container>
    )
}
