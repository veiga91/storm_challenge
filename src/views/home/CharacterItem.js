
import React from 'react';
import { ImageContainer, Thumb } from '../../components/layout';
import { CharacterName, NameTag, ImageTouchable } from './styled';
import LazyLoadImage from '../../components/image/LazyLoadImage';
import { withTheme } from 'styled-components';

const _renderContent = ({ name, uri, size, onPress }) =>  ({ _onLoadEnd }) => (
  <ImageTouchable size={size} onPress={onPress}>
   <ImageContainer>
     <Thumb
       size={size}
       source={{ uri }}
       resizeMode="stretch"
       resizeMethod="auto"
       onLoadEnd={_onLoadEnd}
     />
   </ImageContainer>
   <NameTag>
     <CharacterName>{name}</CharacterName>
   </NameTag>
 </ImageTouchable>
);

const CharacterItem = ({ uri, name, size, onPress, loading, theme }) => (
  <LazyLoadImage
    uri={uri}
    height={theme.thumbs.full.height}
    loading={loading}
    renderContent={_renderContent({ uri, name, size, onPress })}
  />
);

export default withTheme(CharacterItem);
