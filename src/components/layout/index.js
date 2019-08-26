import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const Container = styled.View`
  height: ${height - 50};
  background-color: ${props => props.theme.colors[props.bgColor] || 'transparent'};
`;

export const LoadingContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors[props.bgColor] || 'transparent'};
`;

export const ItemLoadingContainer = styled.View`
  height: ${props => props.height || '100%'};
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors[props.bgColor] || 'transparent'};
  border-color: ${props => props.theme.colors.black};
  border-bottom-width: ${scale(1)};
`;

export const ErrorContainer = styled(Container)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-right: ${scale(20)};
  padding-left: ${scale(20)};
`;

export const ImageContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  background-color: transparent;
  ${(props) => {
    if (props.size) {
      return `
        height: ${props.theme.thumbs[props.size].height};
      `;
    }

    return 'height: 100%;'
  }}
  ${(props) => {
    if (props.size) {
      return `
        width: ${props.theme.thumbs[props.size].width};
      `;
    }

    return 'width: 100%;'
  }}
`;


export const Thumb = styled.Image`
  ${(props) => {
    if (props.size) {
      return `
        height: ${props.theme.thumbs[props.size].height};
      `;
    }

    return 'height: 100%;'
  }}
  ${(props) => {
    if (props.size) {
      return `
        width: ${props.theme.thumbs[props.size].width};
      `;
    }

    return 'width: 100%;'
  }}
`;

export const Separator = styled.View`
  width: 98%;
  margin-left: 3;
  margin-right: 3;
  background-color: ${props => props.theme.colors.white};
  height: ${scale(1)};
`;