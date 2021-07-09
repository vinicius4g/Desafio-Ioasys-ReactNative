import styled from 'styled-components/native';
import commonStyles from '../../global/CommonStyles';

export const StyledContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${commonStyles.colors.background};
`;

export const StyledTitleList = styled.Text`
  margin-left: 24px;
  margin-top: 28px;
  margin-bottom: 10px;
  font-family: ${commonStyles.fonts.medium};
  color: ${commonStyles.colors.text_dark};
  font-size: 20px;
`;

export const StyledFlatListCards = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})``;
