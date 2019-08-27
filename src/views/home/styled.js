import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';

export const CharacterName = styled.Text`
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  font-size: ${scale(16)};
`;

export const NameTag = styled.View`
  position: absolute;
  bottom: ${scale(20)};
  left: 50;
  bottom: 40;
  padding-left: ${scale(10)};
  padding-right: ${scale(10)};
  padding-bottom:  ${scale(8)};
  padding-top:  ${scale(8)};
  background-color: ${props => props.theme.colors.white};
`;

export const NameContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: flex-start;
  padding-left: ${scale(30)};
  z-index: 2;
`;

export const ImageTouchable = styled.TouchableOpacity`
  height: ${props => props.theme.thumbs[props.size].height};
  width: 100%;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  ${props => props.customStyle};
`;