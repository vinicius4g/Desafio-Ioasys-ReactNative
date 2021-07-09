import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';
import commonStyles from '../../global/CommonStyles';

export const StyledWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4
})``;

export const StyledContainer = styled.View`
  background-color: ${commonStyles.colors.shape};
  border-radius: 5px;

  padding: 17px 24px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 16px;
`;

export const StyledTitle = styled.Text`
  font-family: ${commonStyles.fonts.regular};
  font-size: 20px;
`;

export const StyledType = styled.Text`
  font-family: ${commonStyles.fonts.regular};
  font-size: 19px;
  color: ${commonStyles.colors.text};
  margin-top: 4px;
  margin-right: 80px;
`;

export const StyledFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInfos = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledIcon = styled(Feather)`
  font-size: 20px;
  color: ${commonStyles.colors.text};
`;

export const StyledCoutryName = styled.Text`
  font-size: 17px;
  color: ${commonStyles.colors.text};
`;

export const StyledCityName = styled.Text`
  font-size: 17px;
  color: ${commonStyles.colors.text};
  margin-left: 18px;
`;

export const StyledPhoto = styled(Image)`
  height: 60px;
  width: 80px;
  border-radius: 6px;
`;
