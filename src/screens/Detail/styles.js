import styled from 'styled-components/native'
import commonStyles from '../../global/CommonStyles'


export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-color: ${commonStyles.colors.background};
`;

export const Container = styled.ScrollView`
`;

export const EnterpriseView = styled.View`
    flex-direction: row;

    background-color: ${commonStyles.colors.shape};
    margin-top: 16px;
    margin-right: 24px;
    margin-left: 24px;
`;

export const Label = styled.Text`
    margin-left: 24px;
    margin-top: 28px;
    margin-bottom: 10px;

    font-family: ${commonStyles.fonts.medium};
    font-size: 20px;
    
    color: ${commonStyles.colors.text_dark};
`;

export const Name = styled.Text`
    margin-top: 28px;
    margin-bottom: 10px;
    margin-left: 2px;
    flex: 1;

    font-family: ${commonStyles.fonts.medium};
    font-size: 20px;
    
    color: ${commonStyles.colors.text};
`;

export const PlaceView = styled.View`
    margin-top: 16px;
    margin-right: 24px;
    margin-left: 24px;

    flex-direction: row;
    flex: 1;

    background-color: ${commonStyles.colors.shape};
`;

export const NameCountry = styled.Text`
    margin-top: 28px;
    margin-left: 24px;
    margin-bottom: 10px;

    font-family: ${commonStyles.fonts.medium};
    font-size: 20px;

    color: ${commonStyles.colors.text_dark};
`;

export const NameCity = styled.Text`
    margin-top: 28px;
    margin-bottom: 10px;

    font-family: ${commonStyles.fonts.medium};
    font-size: 20px;

    color: ${commonStyles.colors.text_dark};
`;

export const DescriptionView = styled.View`
    margin-top: 16px;
    margin-right: 24px;
    margin-left: 24px;
    
    background-color: ${commonStyles.colors.shape};
    flex: 1;
`;

export const LabelDescription = styled.Text`
    margin-top: 28px;
    margin-left: 24px;

    font-family: ${commonStyles.fonts.medium};
    font-size: 20px;

    color: ${commonStyles.colors.text_dark};
`;

export const DescriptionText = styled.Text`
    margin-bottom: 10px;
    margin-left: 24px;
    
    font-family: ${commonStyles.fonts.regular};
    font-size: 20px;

    color: ${commonStyles.colors.text};
`;

export const EnterprisePhotoView = styled.View`
    justify-content: center;
    background-color: ${commonStyles.colors.shape};

    margin-top: 16px;
    margin-right: 24px;
    margin-left: 24px;
    margin-bottom: 10px;
`;

export const PhotoSpace = styled.View`
    align-items: flex-start;
    justify-content: flex-start;
    
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 10px;
    margin-bottom: 40px;
`;

export const Photo = styled.Image`
    width: 100%;
    height: 300px;
`;
