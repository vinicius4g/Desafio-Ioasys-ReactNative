import styled from 'styled-components/native';
import commonStyles from '../../global/CommonStyles';
import { MaterialIcons } from '@expo/vector-icons'

export const Background = styled.View`
    flex:1;
    background-color: ${commonStyles.colors.shape};
`;

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-bottom: 35px;
`;

export const ButtonBack = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
    margin-top: 5px;
    margin-bottom: 9px;
    align-items: center;
`;

export const LabelButtonBack = styled.Text`
    margin-top: 40px;
    color: ${commonStyles.colors.text_dark};
    
    font-family: ${commonStyles.fonts.medium};
    font-size: 28px;
`;

export const Icon = styled(MaterialIcons)`
    color: ${commonStyles.colors.text_dark};
    font-size: 32px;
`;