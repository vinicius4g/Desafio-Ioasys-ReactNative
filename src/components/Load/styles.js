import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import commonStyles from '../../global/CommonStyles';

export const StyledContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${commonStyles.colors.shape};
`;

export const StyledAnimation = styled(LottieView)`
  background-color: transparent;
  width: 200px;
  height: 200px;
`;
