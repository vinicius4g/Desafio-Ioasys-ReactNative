import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import commonStyles from '../../global/CommonStyles';

export const StyledContainer = styled(TextInput).attrs({
  placeholderTextColor: commonStyles.colors.placeholderInput
})`
  flex: 1;

  padding: 16px 18px;

  font-family: ${commonStyles.fonts.regular};
  font-size: 14px;

  color: ${commonStyles.colors.text_dark};
  background-color: ${commonStyles.colors.shape};
  border-radius: 5px;
`;
