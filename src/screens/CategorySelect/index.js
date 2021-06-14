import React, { useState } from 'react'

import { 
    Container, 
    FlatList,
    Category,
    Icon,
    NameCategory,
    AreaButton,
    Separator,
} from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { categories } from '../../utils/categories'


export function CategorySelect({...props}) {
   
    function handleCategorySelect(item){
        props.setCategory(item)  
    }
      
    return (
        <Container>
            <Header title={'Selecione uma Categoria'} />
            
            <FlatList 
                    data={categories}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <Category
                            onPress={() => handleCategorySelect(item)}
                            isActive={props.category.key === item.key}
                        >
                            <Icon name={item.icon}/>
                            <NameCategory>{item.name}</NameCategory>
                        </Category>
                    )}
                    ItemSeparatorComponent={() => <Separator />}
            />
            
            <AreaButton>
                <Button 
                    title="Selecionar"
                    nameIcon="add-task"
                    onPress={props.closeSelectCategory}
                />
            </AreaButton>
            
          
            
        </Container>
    )
}
