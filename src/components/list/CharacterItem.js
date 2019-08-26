
import React, { Component } from 'react';
import { Animated, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { ImageContainer, Thumb, ItemLoadingContainer } from '../layout';
import { CharacterName, NameTag } from './styled';
import { withTheme } from 'styled-components';
import logo from '../../assets/logo.jpg';

const Loader = ({ height }) => (
  <ItemLoadingContainer style={{ height }}>
    <ActivityIndicator color="#FFF" size={25} />
  </ItemLoadingContainer>
);

class CharacterItem extends Component {
  state = {
    opacity: new Animated.Value(0),
    showImage: false
  }

  _onLoadEnd = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
    }).start();
  }

  handleLoading = () => {
    const { height } = this.props.theme.thumbs.full;
    
    if (this.props.loading) {
      return (
       <Loader height={height} />
      )
    }

    if (!this.state.showImage) {
      Image.getSize(this.props.uri, () => this.setState({ showImage: true }))
      return (
        <Loader height={height} />
      )
    }

    return (
      <Animated.View
          style={{
            width:'100%',
            height,
            opacity: this.state.opacity,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 5,
          }}
        >
           <ImageContainer size={this.props.size}>
            <Thumb
              size={this.props.size}
              source={{ uri: this.props.uri }}
              resizeMode="stretch"
              resizeMethod="auto"
              onLoadEnd={this._onLoadEnd}
            />
          </ImageContainer>
          <NameTag>
            <CharacterName>{this.props.name}</CharacterName>
          </NameTag>
        </Animated.View>
    );
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {this.handleLoading()}
        
      </TouchableOpacity>
    );
  }
};

export default withTheme(CharacterItem);
