import styled from 'styled-components/native'
import commonStyles from '../../global/CommonStyles'
import { Feather } from '@expo/vector-icons'
import { Image } from 'react-native'

export const Wrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4  
})`
`;

export const Container = styled.View`
    background-color: ${commonStyles.colors.shape};
    border-radius: 5px;
    
    padding: 17px 24px;
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 16px;
    
`;

export const Title = styled.Text`
    font-family: ${commonStyles.fonts.regular};
    font-size: 20px;

`;


export const Type = styled.Text`
    font-family: ${commonStyles.fonts.regular};
    font-size: 19px;
    color: ${commonStyles.colors.text};
    margin-top: 4px;
    margin-right: 80px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`;

export const Infos = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    font-size: 20px;
    color: ${commonStyles.colors.text};
`;

export const CoutryName = styled.Text`
    font-size: 17px;
    color: ${commonStyles.colors.text};
    
`;

export const CityName = styled.Text`
    font-size: 17px;
    color: ${commonStyles.colors.text};
    margin-left: 18px;
`;


export const Photo = styled(Image)`
    height: 60px;
    width: 80px;
    border-radius: 6px;   
`; 