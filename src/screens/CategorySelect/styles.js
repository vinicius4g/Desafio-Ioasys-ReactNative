import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import commonStyles from '../../global/CommonStyles';

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${commonStyles.colors.background};
`;

export const StyledFlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;
`;

export const StyledCategoryItems = styled.ScrollView`
  flex: 1;
`;

export const StyledCategory = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ isActive }) =>
    isActive
      ? commonStyles.colors.primary_light
      : commonStyles.colors.background};
`;

export const StyledIcon = styled(Feather)`
  font-size: 20px;
  margin-right: 16px;
`;

export const StyledNameCategory = styled.Text`
  font-family: ${commonStyles.fonts.regular};
  font-size: 14px;
`;

export const StyledSeparator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${commonStyles.colors.text};
`;

export const StyledAreaButton = styled.View`
  margin-top: 10px;
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 20px;
`;
