import styled from 'styled-components/native'
import commonStyles from '../../global/CommonStyles'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    background-color: ${commonStyles.colors.background};
`;

export const AreaInputName = styled.View` 
    margin-top: 24px;
    margin-right: 24px;
    margin-left: 24px;
    margin-bottom: 10px;
    
`;

export const AreaInputCategory = styled.View` 
    background: ${commonStyles.colors.shape};
    margin: 0 24px;
    border-radius: 6px;
`;

export const ButtonCategory = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
    color: ${commonStyles.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    border-radius: 5px;
    padding: 18px 16px;
`;

export const PlaceHolderCategory = styled.Text`
    font-family: ${commonStyles.fonts.regular};
    color: ${commonStyles.colors.placeholderInput};
    font-size: 14px;
`;

export const Category = styled.Text`
    font-family: ${commonStyles.fonts.regular};
    color: ${commonStyles.colors.text_dark};
    font-size: 14px;
`;

export const Icon = styled(Feather)`
    font-size: 20px;
    color: ${commonStyles.colors.placeholderInput};
`;

export const AreaButton = styled.View` 
    margin-top: 24px;
    margin-right: 24px;
    margin-left: 24px;
    margin-bottom: 10px;
`;

export const TitleList = styled.Text`
    margin-left: 24px;
    margin-top: 28px;
    margin-bottom: 10px;
    font-family: ${commonStyles.fonts.regular};
    color: ${commonStyles.colors.text_dark};
    font-size: 18px;
`;

export const FlatListCards = styled.FlatList.attrs({
    showsVerticalScrollIndicator:false
})`

`;
