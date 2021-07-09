import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import commonStyles from '../../global/CommonStyles';

export const StyledBackground = styled.View`
  flex: 1;
  background-color: ${commonStyles.colors.shape};
`;

export const StyledContainer = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledLogo = styled.Image`
  margin-bottom: 35px;
`;

export const StyledButtonBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4
})`
  margin-top: 5px;
  margin-bottom: 9px;
  align-items: center;
`;

export const StyledLabelButtonBack = styled.Text`
  margin-top: 40px;
  color: ${commonStyles.colors.text_dark};

  font-family: ${commonStyles.fonts.medium};
  font-size: 28px;
`;

export const StyledIcon = styled(MaterialIcons)`
  color: ${commonStyles.colors.text_dark};
  font-size: 32px;
`;
