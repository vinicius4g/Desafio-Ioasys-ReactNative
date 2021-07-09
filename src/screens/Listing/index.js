import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  StyledContainer,
  StyledTitleList,
  StyledFlatListCards
} from './styles';
import { AuthContext } from '../../contexts/auth';
import { SearchContext } from '../../contexts/search';

import { HeaderHome } from '../../components/HeaderHome';
import { CardEnterprise } from '../../components/CardEnterprise';
import { Load } from '../../components/Load';

export function Listing() {
  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);
  const {
    searchShowEnterprises,
    enterprises,
    searchShowDetail,
    loadingSearch
  } = useContext(SearchContext);

  let userName = '';
  if (user) {
    userName = user.investor.investor_name;
  }

  useEffect(() => {
    searchShowEnterprises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDetails(id) {
    searchShowDetail(id);
    navigation.navigate('Detalhes');
  }

  if (loadingSearch) {
    return <Load />;
  }

  return (
    <StyledContainer>
      <HeaderHome title={userName} signOut={signOut} />
      <StyledTitleList>Todas as empresas cadstradas</StyledTitleList>

      {enterprises && (
        <StyledFlatListCards
          data={enterprises.enterprises}
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
  );
}
