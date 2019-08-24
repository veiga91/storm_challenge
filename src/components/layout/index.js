import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';

export const Container = styled.View`
  height: 100%;
  background-color: transparent;
`;

export const LoadingContainer = styled(Container)`
  justify-content: center;
  align-items: center;
`;

export const ErrorContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  padding-right: ${scale(20)};
  padding-left: ${scale(20)};
`;

