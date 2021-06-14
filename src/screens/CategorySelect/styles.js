import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import commonStyles from '../../global/CommonStyles'


export const Container = styled.View`
    flex: 1;
    background-color: ${commonStyles.colors.background};
`;

export const FlatList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})`
    flex: 1;
`;

export const CategoryItems = styled.ScrollView`
    flex: 1;
`;

export const Category = styled.TouchableOpacity`
    width: 100%;
    padding: 15px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ isActive }) => 
        isActive ? commonStyles.colors.primary_light : commonStyles.colors.background };
`;

export const Icon = styled(Feather)`
    font-size: 20px;
    margin-right: 16px;
`;

export const NameCategory = styled.Text`
    font-family: ${commonStyles.fonts.regular};
    font-size: 14px;
`;


export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${commonStyles.colors.text};
`;


export const AreaButton = styled.View`   
    margin-top: 10px;
    margin-right: 24px;
    margin-left: 24px;
    margin-bottom: 20px;
`;


    

