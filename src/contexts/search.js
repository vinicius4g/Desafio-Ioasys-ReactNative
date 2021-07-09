import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { AuthContext } from './auth';
import api from '../services/api';

export const SearchContext = createContext({});
// * Listagem de Empresas: `/enterprises`
// * Detalhamento de Empresas: `/enterprises/{id}`
// * Filtro de Empresas por nome e tipo: `/enterprises?enterprise_types={type}&name={name}`

function SearchProvider({ children }) {
  const { header } = useContext(AuthContext);

  const [enterprises, setEnterprises] = useState();
  const [enterpriseDetail, setEnterpriseDetail] = useState();
  const [enterprisesFiltered, setEnterprisesFiltered] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  async function searchShowEnterprises() {
    setLoadingSearch(true);

    api
      .get(`api/v1/enterprises`, {
        headers: {
          'Content-Type': 'application/json',
          client: `${header.client}`,
          uid: `${header.uid}`,
          'access-token': `${header.access_token}`
        }
      })
      .then(async value => {
        setEnterprises(value.data);
        setLoadingSearch(false);
      })
      .catch(error => {
        Alert.alert(error.code);
        setLoadingSearch(false);
      });
  }

  // eslint-disable-next-line consistent-return
  async function searchFilterNameAndType(nameCompany, typeCompany) {
    setLoadingSearch(true);
    // console.log(nameCompany, typeCompany)
    // busca somente pelo tipo e diferente de todas as categorias
    if (nameCompany === '' && typeCompany !== 9999 && typeCompany !== 777) {
      api
        .get(`api/v1/enterprises?enterprise_types=${typeCompany}`, {
          headers: {
            'Content-Type': 'application/json',
            client: `${header.client}`,
            uid: `${header.uid}`,
            'access-token': `${header.access_token}`
          }
        })
        .then(async value => {
          setEnterprisesFiltered(value.data);
          setLoadingSearch(false);
        })
        .catch(error => {
          Alert.alert(error.code);
          setLoadingSearch(false);
        });
    }
    // busca pelo nome em todas as categorias
    else if (
      (nameCompany !== '' && typeCompany === 777) ||
      typeCompany === 9999
    ) {
      api
        .get(`api/v1/enterprises?&name=${nameCompany}`, {
          headers: {
            'Content-Type': 'application/json',
            client: `${header.client}`,
            uid: `${header.uid}`,
            'access-token': `${header.access_token}`
          }
        })
        .then(async value => {
          setEnterprisesFiltered(value.data);
          setLoadingSearch(false);
        })
        .catch(error => {
          Alert.alert(error.code);
          setLoadingSearch(false);
        });
    }

    // busca pelo nome e categoria
    else if (
      nameCompany !== '' &&
      typeCompany !== 9999 &&
      typeCompany !== 777
    ) {
      api
        .get(
          `api/v1/enterprises?enterprise_types=${typeCompany}&name=${nameCompany}`,
          {
            headers: {
              'Content-Type': 'application/json',
              client: `${header.client}`,
              uid: `${header.uid}`,
              'access-token': `${header.access_token}`
            }
          }
        )
        .then(async value => {
          setEnterprisesFiltered(value.data);
          setLoadingSearch(false);
        })
        .catch(error => {
          Alert.alert(error.code);
          setLoadingSearch(false);
        });
    } else {
      setLoadingSearch(false);
      return Alert.alert('Opção disponível na tela Empresas 😅');
    }
  }

  async function searchShowDetail(id) {
    setLoadingSearch(true);

    api
      .get(`api/v1/enterprises/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          client: `${header.client}`,
          uid: `${header.uid}`,
          'access-token': `${header.access_token}`
        }
      })
      .then(async value => {
        setEnterpriseDetail(value.data);
        setLoadingSearch(false);
      })
      .catch(error => {
        Alert.alert(error.code);
        setLoadingSearch(false);
      });
  }

  return (
    <SearchContext.Provider
      value={{
        loadingSearch,
        searchShowEnterprises,
        searchFilterNameAndType,
        searchShowDetail,
        enterprises,
        enterprisesFiltered,
        enterpriseDetail
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired
};
