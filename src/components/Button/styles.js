import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import commonStyles from '../../global/CommonStyles';

export const StyledContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4
})`
  width: 100%;
  height: 56px;

  flex-direction: row;

  font-family: ${commonStyles.fonts.regular};
  font-size: 14px;

  background-color: ${commonStyles.colors.primary};
  border-radius: 6px;
`;

export const StyledAreaIcon = styled.View`
  justify-content: center;
  align-items: center;
  /* background: ${commonStyles.colors.dark_light}; */

  padding: 16px;
  border-radius: 6px;
`;
export const StyledAreaTitle = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const StyledIcon = styled(MaterialIcons)`
  font-size: 22px;
  color: ${commonStyles.colors.shape};
`;

export const StyledTitle = styled.Text`
  font-family: ${commonStyles.fonts.medium};
  font-size: 14px;
  color: ${commonStyles.colors.shape};
  margin-left: -58px;
`;
