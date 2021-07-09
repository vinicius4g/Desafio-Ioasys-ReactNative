import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import commonStyles from '../../global/CommonStyles';

export const StyledHeaderView = styled.View`
  width: 100%;
  height: 180px;

  background-color: ${commonStyles.colors.dark};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const StyledUserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: 28px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledUserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledPhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 10px;
`;

export const StyledUser = styled.View`
  margin-left: 17px;
`;

export const StyledUserGreeting = styled.Text`
  color: ${commonStyles.colors.shape};
  font-size: 18px;
  font-family: ${commonStyles.fonts.regular};
`;

export const StyledUserName = styled.Text`
  color: ${commonStyles.colors.shape};
  font-size: 18px;
  font-family: ${commonStyles.fonts.bold};
`;

export const StyledLogoutButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4
})``;

export const StyledIcon = styled(Feather)`
  color: ${commonStyles.colors.shape};
  font-size: 24px;
`;
