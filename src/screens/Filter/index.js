import React, { useState, useContext } from 'react';
import { Alert, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  StyledContainer,
  StyledAreaInputName,
  StyledAreaInputCategory,
  StyledButtonCategory,
  StyledPlaceHolderCategory,
  StyledCategory,
  StyledIcon,
  StyledAreaButton,
  StyledTitleList,
  StyledFlatListCards
} from './styles';

import { SearchContext } from '../../contexts/search';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { CategorySelect } from '../CategorySelect';
import { CardEnterprise } from '../../components/CardEnterprise';

import { Load } from '../../components/Load';

export function Filter() {
  const navigation = useNavigation();

  const {
    searchFilterNameAndType,
    enterprisesFiltered,
    searchShowDetail,
    loadingSearch
  } = useContext(SearchContext);

  const [name, setName] = useState('');
  const [category, setCategory] = useState({
    icon: '',
    key: '',
    name: '',
    type: 9999
  });
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleSearchFilter() {
    if (name === '' && category.type === 9999)
      return Alert.alert('Informe pelo menos uma das opções 🕵️');

    return searchFilterNameAndType(name, category.type);
  }

  function handleDetails(id) {
    searchShowDetail(id);
    navigation.navigate('Detalhes');
  }

  if (loadingSearch) {
    return <Load />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StyledContainer>
        <Header title='Pesquisar Empresas' />

        <StyledAreaInputName>
          <Input
            onChangeText={setName}
            value={name}
            placeholder='Digite o nome da empresa'
          />
        </StyledAreaInputName>

        <StyledAreaInputCategory>
          <StyledButtonCategory onPress={handleShowModal}>
            {category.type === 9999 ? (
              <StyledPlaceHolderCategory>
                Selecione a Categoria
              </StyledPlaceHolderCategory>
            ) : (
              <StyledCategory>{category.name}</StyledCategory>
            )}
            <StyledIcon name='chevron-down' />
          </StyledButtonCategory>
        </StyledAreaInputCategory>

        <Modal visible={showModal}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseModal}
          />
        </Modal>

        <StyledAreaButton>
          <Button
            title='Buscar'
            nameIcon='search'
            onPress={handleSearchFilter}
          />
        </StyledAreaButton>

        {enterprisesFiltered.enterprises && (
          <StyledTitleList>Listagem</StyledTitleList>
        )}
        {enterprisesFiltered.enterprises && (
          <StyledFlatListCards
            data={enterprisesFiltered.enterprises}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <CardEnterprise
                data={item}
                onPress={() => handleDetails(item.id)}
              />
            )}
          />
        )}
      </StyledContainer>
    </TouchableWithoutFeedback>
  );
}
