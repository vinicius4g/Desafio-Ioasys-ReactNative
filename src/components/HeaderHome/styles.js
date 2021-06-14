import styled from 'styled-components/native'
import commonStyles from '../../global/CommonStyles'
import { Feather } from '@expo/vector-icons'

export const HeaderView = styled.View`
    width: 100%;
    height: 180px;
    
    background-color: ${commonStyles.colors.dark};
    
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-top: 28px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreeting = styled.Text`
    color: ${commonStyles.colors.shape};
    font-size: 18px;
    font-family: ${commonStyles.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${commonStyles.colors.shape};
    font-size: 18px;
    font-family: ${commonStyles.fonts.bold};
`;

export const LogoutButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4 
})`
`;

export const Icon = styled(Feather)`
    color: ${commonStyles.colors.shape};
    font-size: 24px;
`;
