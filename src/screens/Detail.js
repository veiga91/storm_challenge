import React, { PureComponent } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCharacterDetail } from '../store/actions/detail';
import { Container, ErrorContainer } from '../components/layout';
import { getCharacterData, getFetchingError, getLoadingState } from '../store/selectors/detail';
import List from '../components/list/List';
import CharacterThumb from '../components/list/CharacterItem';
import { withTheme } from 'styled-components';
import logo from '../assets/logo.jpg';
import magnify from '../assets/magnify.png';
import { verticalScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-navigation';

class Home extends PureComponent {

  static navigationOptions = () => {
    return {
      header: null
    }
  }

  componentDidMount() {
    const id= this.props.navigation.getParam('id');
    this.props.fetchCharacterDetail(id);
  }

  handleLoadingState = () => {
    const { isLoading, error } = this.props;

    if (error) {
     return (
       <ErrorContainer>
         <Text>{error}</Text>
       </ErrorContainer>
     );
    }
    
    if (isLoading) {
      return (
        <ErrorContainer>
          <Text>{error}</Text>
        </ErrorContainer>
      );
     }

    return (
      <Container >
        <Text>{this.props.character.name}</Text>
      </Container>
    );
  }

  render() {
    return (
        <SafeAreaView style={{ width: '100%', height: verticalScale(300), backgroundColor: this.props.theme.colors.black }}>
      <Container bgColor="black">
        <Image resizeMode="cover"
      resizeMethod="resize"style={{ width: '100%', height: verticalScale(300) }} source={{ uri: this.props.navigation.getParam('uri') }} />
        {this.handleLoadingState()}
      </Container>
        </SafeAreaView>
    );
  }
}

const mapStateFormProps = (state, ownProps) => {
  return {
    ...ownProps,
    isLoading: getLoadingState(state),
    character: getCharacterData(state),
    error: getFetchingError(state)
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchCharacterDetail }, dispatch);

export default connect(mapStateFormProps, mapDispatchToProps)(withTheme(Home));
