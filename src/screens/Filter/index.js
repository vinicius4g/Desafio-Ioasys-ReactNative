import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { SearchContext } from '../../contexts/search'

import { 
    Container, 
    AreaInputName,
    AreaInputCategory, 
    ButtonCategory,
    PlaceHolderCategory,
    Category,
    Icon,
    AreaButton,
    TitleList,
    FlatListCards 
} from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { CategorySelect } from '../CategorySelect'
import { CardEnterprise } from '../../components/CardEnterprise'

import { Load } from '../../components/Load'

export function Filter() {
    const navigation = useNavigation()

    const { 
        searchFilterNameAndType, 
        enterprisesFiltered, 
        searchShowDetail, 
        loadingSearch 
    } = useContext(SearchContext)

    const [name, setName] = useState('')
    const [category, setCategory] = useState({
        "icon": "",
        "key": "",
        "name": "",
        "type": 9999

    })
    const [showModal, setShowModal] = useState(false)
    
    function handleShowModal(){
        setShowModal(true)
    }

    function handleCloseModal(){
        setShowModal(false)
    }

    function handleSearchFilter(){
        if(name === '' && category.type === 9999)
            return Alert.alert('Informe pelo menos uma das opções 🕵️')

        searchFilterNameAndType(name, category.type)
    }

    function handleDetails(id){  
        searchShowDetail(id)
        navigation.navigate('Detalhes')
    }

    if(loadingSearch){
        return (
            <Load />
        )
    }
    
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <Container>
                <Header title={'Pesquisar Empresas'} />
                
                <AreaInputName>
                    <Input 
                        onChangeText={setName}
                        value={name} 
                        placeholder="Digite o nome da empresa"        
                    />
                </AreaInputName>
            
                <AreaInputCategory>
                    <ButtonCategory 
                        onPress={handleShowModal}
                    >     
                        { category.type === 9999 
                            ? <PlaceHolderCategory>Selecione a Categoria</PlaceHolderCategory> 
                            : <Category>{category.name}</Category>                
                        } 
                        <Icon name="chevron-down"/>
                    </ButtonCategory>
                </AreaInputCategory>

                <Modal visible={showModal}>
                    <CategorySelect 
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseModal}
                    />
                </Modal>

                <AreaButton>
                    <Button 
                        title="Buscar"
                        nameIcon="search"
                        onPress={handleSearchFilter}
                    />
                </AreaButton>
                
                { 
                    enterprisesFiltered.enterprises && 
                    <TitleList>Listagem</TitleList> 
                }
                {     
                    enterprisesFiltered.enterprises && 
                    <FlatListCards 
                        data={enterprisesFiltered.enterprises}
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
        </TouchableWithoutFeedback>
    )
}
