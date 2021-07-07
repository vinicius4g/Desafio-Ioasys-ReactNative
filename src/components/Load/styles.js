import styled from 'styled-components/native'
import commonStyles from '../../global/CommonStyles'

import LottieView from 'lottie-react-native'

export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${commonStyles.colors.shape};
`;

export const Animation = styled(LottieView)`
    background-color: transparent;
    width: 200px;
    height: 200px;
`;
