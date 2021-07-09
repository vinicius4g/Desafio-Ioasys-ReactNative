import styled from 'styled-components/native';
import commonStyles from '../../global/CommonStyles';

export const StyledHeaderView = styled.View`
  width: 100%;
  height: 100px;

  background-color: ${commonStyles.colors.dark};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const StyledTitle = styled.Text`
  font-family: ${commonStyles.fonts.regular};
  font-size: 18px;
  color: ${commonStyles.colors.shape};
`;
