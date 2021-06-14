import styled from 'styled-components/native'
import commonStyles from '../../global/CommonStyles'
import { Feather } from '@expo/vector-icons'

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${commonStyles.colors.background};
`;

export const TitleList = styled.Text`
    margin-left: 24px;
    margin-top: 28px;
    margin-bottom: 10px;
    font-family: ${commonStyles.fonts.medium};
    color: ${commonStyles.colors.text_dark};
    font-size: 20px;
`;

export const FlatListCards = styled.FlatList.attrs({
    showsVerticalScrollIndicator:false
})`

`;

