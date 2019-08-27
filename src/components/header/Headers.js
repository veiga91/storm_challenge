import React from 'react';
import LazyLoadImage from '../image/LazyLoadImage';
import { withTheme } from 'styled-components';
import {
  MagnifyIcon,
  MagnifyTouchable,
  LogoImage,
  ArrowBackContainer,
  ArrowBackTouchable,
  ArrowBackImage
} from './styled';
import { BannerImage } from '../layout';
import { TextInput, Button } from 'react-native';

export const headerWithMagnifyIcon = ({ onPress }) => (
  {
    headerStyle: {
      backgroundColor: '#000'
    },
    headerTitle: <LogoImage />,
    headerRight: (
      <MagnifyTouchable onPress={onPress}>
        <MagnifyIcon />
      </MagnifyTouchable>
    ),
  }
);

export const FloatingBackButtonHeader = ({ onPress }) => (
  <ArrowBackContainer>
    <ArrowBackTouchable onPress={onPress}>
      <ArrowBackImage />
    </ArrowBackTouchable>
  </ArrowBackContainer>
);

const _renderContent = ({ uri }) =>  ({ _onLoadEnd }) => (
  <BannerImage
    source={{ uri }}
    resizeMode="cover"
    resizeMethod="resize"
    onLoadEnd={_onLoadEnd}
  />
);

const Banner = ({ uri, theme }) => (
  <LazyLoadImage
    uri={uri}
    height={theme.banner.height}
    renderContent={_renderContent({ uri })}
  />
);
export const Headerbanner = withTheme(Banner);

