import styled from 'styled-components/native';
import magnify from '../../assets/magnify.png';
import logo from '../../assets/logo.jpg';
import arrowBack from '../../assets/arrowBack.png';

export const MagnifyTouchable = styled.TouchableOpacity`
  width: 35;
  height: 35;
  margin-right: 20;
`;

export const MagnifyIcon = styled.Image.attrs({ source: magnify })`
  width: 30;
  height: 30;
  tintColor: ${props => props.theme.colors.red};
`;

export const LogoImage = styled.Image.attrs({ source: logo })`
  width: 80;
  height: 35;
  margin-left: 20;
  margin-bottom: 10;
`;

export const ArrowBackTouchable = styled.TouchableOpacity`
  width: 35;
  height: 35;
  margin-right: 20;
  margin-left: 20;
  margin-top: 10;
`;

export const ArrowBackContainer = styled.View`
  width: 100%;
  padding-bottom: 10;
  padding-top: 50;
  position: absolute;
  z-index: 2;
`;

export const ArrowBackImage = styled.Image.attrs({ source: arrowBack })`
  width: 35;
  height: 35;
  tintColor: ${props => props.theme.colors.red};
`;

export const SearchInput = styled.TextInput`
  height: 60;
  border-color: transparent;
  border-width: 0;
  flex: 1;
  border-radius: 10;
  background-color: ${props => props.theme.colors.white};
`;

export const SearchBarContainer = styled.View`
  width: 100%;
  position: absolute;
  z-index: 20;
  top: 40;
  padding-left: 10;
  flex-direction: row;
  background-color: ${props => props.theme.colors.black};
  
`;