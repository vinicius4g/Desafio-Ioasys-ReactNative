import styled from 'styled-components/native'
import commonStyles from '../../global/CommonStyles'
import { TextInput } from 'react-native'

export const Container = styled(TextInput).attrs({
    placeholderTextColor: commonStyles.colors.placeholderInput,
})`
    width: 100%;
    height: 56px;
    
    padding: 16px 18px;

    font-family: ${commonStyles.fonts.regular};
    font-size: 14px;

    color: ${commonStyles.colors.text_dark};
    background-color: ${commonStyles.colors.shape};
    border-radius: 5px;
`;