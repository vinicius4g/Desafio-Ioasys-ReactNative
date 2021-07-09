import React, { useContext } from 'react';
import {
  StyledContainer,
  StyledEnterpriseView,
  StyledLabel,
  StyledWrapper,
  StyledName,
  StyledPlaceView,
  StyledNameCountry,
  StyledNameCity,
  StyledDescriptionView,
  StyledLabelDescription,
  StyledDescriptionText,
  StyledEnterprisePhotoView,
  StyledPhotoSpace,
  StyledPhoto
} from './styles';

import { SearchContext } from '../../contexts/search';

import { Header } from '../../components/Header';
import { Load } from '../../components/Load';

export function Detail() {
  const { enterpriseDetail, loadingSearch } = useContext(SearchContext);
  const apiUri = 'https://empresas.ioasys.com.br/';

  if (loadingSearch) {
    return <Load />;
  }
  if (enterpriseDetail === undefined) {
    return (
      <StyledContainer>
        <Header title='Detalhes da Empresa' />
        <StyledEnterpriseView>
          <StyledLabel>Nenhuma empresa selecionada 😅</StyledLabel>
        </StyledEnterpriseView>
      </StyledContainer>
    );
  }
  if (enterpriseDetail !== undefined) {
    return (
      <StyledWrapper>
        <StyledContainer>
          <Header title='Detalhes da Empresa' />

          <StyledEnterpriseView>
            <StyledLabel>Nome: </StyledLabel>
            <StyledName>
              {enterpriseDetail.enterprise.enterprise_name}
            </StyledName>
          </StyledEnterpriseView>

          <StyledPlaceView>
            <StyledNameCountry>País: </StyledNameCountry>
            <StyledName>{enterpriseDetail.enterprise.country}</StyledName>
            <StyledNameCity>Cidade: </StyledNameCity>
            <StyledName>{enterpriseDetail.enterprise.city}</StyledName>
          </StyledPlaceView>

          <StyledDescriptionView>
            <StyledLabelDescription>
              Descrição da Empresa:{' '}
            </StyledLabelDescription>
            <StyledDescriptionText>
              {enterpriseDetail.enterprise.description}
            </StyledDescriptionText>
          </StyledDescriptionView>

          <StyledEnterprisePhotoView>
            <StyledLabel>Foto disponibilizada:</StyledLabel>
            <StyledPhotoSpace>
              {enterpriseDetail && (
                <StyledPhoto
                  source={{ uri: apiUri + enterpriseDetail.enterprise.photo }}
                />
              )}
            </StyledPhotoSpace>
          </StyledEnterprisePhotoView>
        </StyledContainer>
      </StyledWrapper>
    );
  }
}
