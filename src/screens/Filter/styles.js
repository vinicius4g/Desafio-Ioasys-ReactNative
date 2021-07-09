import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import commonStyles from '../../global/CommonStyles';

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${commonStyles.colors.background};
`;

export const StyledAreaInputName = styled.View`
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 10px;
`;

export const StyledAreaInputCategory = styled.View`
  background: ${commonStyles.colors.shape};
  margin: 0 24px;
  border-radius: 6px;
`;

export const StyledButtonCategory = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4
})`
  color: ${commonStyles.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 18px 16px;
`;

export const StyledPlaceHolderCategory = styled.Text`
  font-family: ${commonStyles.fonts.regular};
  color: ${commonStyles.colors.placeholderInput};
  font-size: 14px;
`;

export const StyledCategory = styled.Text`
  font-family: ${commonStyles.fonts.regular};
  color: ${commonStyles.colors.text_dark};
  font-size: 14px;
`;

export const StyledIcon = styled(Feather)`
  font-size: 20px;
  color: ${commonStyles.colors.placeholderInput};
`;

export const StyledAreaButton = styled.View`
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 10px;
`;

export const StyledTitleList = styled.Text`
  margin-left: 24px;
  margin-top: 28px;
  margin-bottom: 10px;
  font-family: ${commonStyles.fonts.regular};
  color: ${commonStyles.colors.text_dark};
  font-size: 18px;
`;

export const StyledFlatListCards = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})``;
