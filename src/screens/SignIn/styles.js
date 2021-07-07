import styled from 'styled-components/native';
import commonStyles from '../../global/CommonStyles';

export const Background = styled.View`
    flex:1;
    background-color: ${commonStyles.colors.background};
`;

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-bottom: 35px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
    background-color: ${commonStyles.colors.shape};
    margin-bottom: 16px;
    margin-right: 24px;
    margin-left: 24px;
    border-radius: 5px;    
`;

export const AreaInputIcon = styled.View`
    align-items: center;
    justify-content: center;
    padding-right: 24px;
`;


export const ButtonShowPassword = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    padding-right: 24px;
`;

export const SubmitButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
    align-items: center;
    justify-content: center;
    
    background-color: ${commonStyles.colors.text_dark};
    
    width: 90%;
    height: 56px;
    border-radius: 7px;
    margin-top: 10px;
    margin-left: 24px;
    margin-right: 24px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    font-family: ${commonStyles.fonts.medium};

    color: ${commonStyles.colors.shape};
`;

export const Link = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
    margin-top: 5px;
    margin-bottom: 9px;
`;

export const LinkText = styled.Text`
    margin-top: 5px;
    color: ${commonStyles.colors.text_dark};
    
    font-family: ${commonStyles.fonts.medium};
`;