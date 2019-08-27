
import React, { Component } from 'react';
import { Animated, ActivityIndicator, Image } from 'react-native';
import { ItemLoadingContainer } from '../layout';

const Loader = ({ height = '100%' }) => (
  <ItemLoadingContainer style={{ height }}>
    <ActivityIndicator color="#FFF" size={25} />
  </ItemLoadingContainer>
);

class LazyLoadImage extends Component {
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
    const { height } = this.props;
    
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
          {this.props.renderContent({ _onLoadEnd: this._onLoadEnd })}
        </Animated.View>
    );
  }

  render() {
    return this.handleLoading();
  }
};

export default LazyLoadImage;
