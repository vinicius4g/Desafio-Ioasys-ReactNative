import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  StyledFlatList,
  StyledCategory,
  StyledIcon,
  StyledNameCategory,
  StyledSeparator,
  StyledAreaButton
} from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { categories } from '../../utils/categories';

export function CategorySelect({ ...props }) {
  function handleCategorySelect(item) {
    props.setCategory(item);
  }

  return (
    <StyledContainer>
      <Header title='Selecione uma Categoria' />

      <StyledFlatList
        data={categories}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <StyledCategory
            onPress={() => handleCategorySelect(item)}
            isActive={props.category.key === item.key}
          >
            <StyledIcon name={item.icon} />
            <StyledNameCategory>{item.name}</StyledNameCategory>
          </StyledCategory>
        )}
        ItemSeparatorComponent={() => <StyledSeparator />}
      />

      <StyledAreaButton>
        <Button
          title='Selecionar'
          nameIcon='add-task'
          onPress={props.closeSelectCategory}
        />
      </StyledAreaButton>
    </StyledContainer>
  );
}

CategorySelect.propTypes = {
  setCategory: PropTypes.func.isRequired,
  closeSelectCategory: PropTypes.func.isRequired,
  category: PropTypes.shape({
    key: PropTypes.string.isRequired
  })
};

CategorySelect.defaultProps = {
  category: PropTypes.shape({
    key: PropTypes.string.isRequired
  })
};
