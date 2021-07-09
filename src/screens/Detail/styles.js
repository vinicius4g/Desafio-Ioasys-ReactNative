import styled from 'styled-components/native';
import commonStyles from '../../global/CommonStyles';

export const StyledWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${commonStyles.colors.background};
`;

export const StyledContainer = styled.ScrollView``;

export const StyledEnterpriseView = styled.View`
  flex-direction: row;

  background-color: ${commonStyles.colors.shape};
  margin-top: 16px;
  margin-right: 24px;
  margin-left: 24px;
`;

export const StyledLabel = styled.Text`
  margin-left: 24px;
  margin-top: 28px;
  margin-bottom: 10px;

  font-family: ${commonStyles.fonts.medium};
  font-size: 20px;

  color: ${commonStyles.colors.text_dark};
`;

export const StyledName = styled.Text`
  margin-top: 28px;
  margin-bottom: 10px;
  margin-left: 2px;
  flex: 1;

  font-family: ${commonStyles.fonts.medium};
  font-size: 20px;

  color: ${commonStyles.colors.text};
`;

export const StyledPlaceView = styled.View`
  margin-top: 16px;
  margin-right: 24px;
  margin-left: 24px;

  flex-direction: row;
  flex: 1;

  background-color: ${commonStyles.colors.shape};
`;

export const StyledNameCountry = styled.Text`
  margin-top: 28px;
  margin-left: 24px;
  margin-bottom: 10px;

  font-family: ${commonStyles.fonts.medium};
  font-size: 20px;

  color: ${commonStyles.colors.text_dark};
`;

export const StyledNameCity = styled.Text`
  margin-top: 28px;
  margin-bottom: 10px;

  font-family: ${commonStyles.fonts.medium};
  font-size: 20px;

  color: ${commonStyles.colors.text_dark};
`;

export const StyledDescriptionView = styled.View`
  margin-top: 16px;
  margin-right: 24px;
  margin-left: 24px;

  background-color: ${commonStyles.colors.shape};
  flex: 1;
`;

export const StyledLabelDescription = styled.Text`
  margin-top: 28px;
  margin-left: 24px;

  font-family: ${commonStyles.fonts.medium};
  font-size: 20px;

  color: ${commonStyles.colors.text_dark};
`;

export const StyledDescriptionText = styled.Text`
  margin-bottom: 10px;
  margin-left: 24px;

  font-family: ${commonStyles.fonts.regular};
  font-size: 20px;

  color: ${commonStyles.colors.text};
`;

export const StyledEnterprisePhotoView = styled.View`
  justify-content: center;
  background-color: ${commonStyles.colors.shape};

  margin-top: 16px;
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 10px;
`;

export const StyledPhotoSpace = styled.View`
  align-items: flex-start;
  justify-content: flex-start;

  margin-left: 24px;
  margin-right: 24px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const StyledPhoto = styled.Image`
  width: 100%;
  height: 300px;
`;
