
import React from 'react';
import { ImageContainer, Thumb } from '../../components/layout';
import { CharacterName, ImageTouchable } from '../home/styled';
import LazyLoadImage from '../../components/image/LazyLoadImage';
import { withTheme } from 'styled-components';

const _renderContent = ({ name, uri, size, onPress }) =>  ({ _onLoadEnd }) => (
  <ImageTouchable justify="space-between" customStyle={{ paddingHorizontal: 10 }} direction={'row'} size={size} onPress={onPress}>
   <ImageContainer size={size}>
     <Thumb
       size={size}
       source={{ uri }}
       resizeMode="cover"
       resizeMethod="auto"
       onLoadEnd={_onLoadEnd}
     />
   </ImageContainer>
   <CharacterName color="red">{name}</CharacterName>
 </ImageTouchable>
);

const CharacterInRow = ({ uri, name, size, onPress, loading, theme }) => (
  <LazyLoadImage
    uri={uri}
    height={theme.thumbs.full.height}
    loading={loading}
    renderContent={_renderContent({ uri, name, size, onPress })}
  />
);

export default withTheme(CharacterInRow);
