import React, { PureComponent } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCharacters } from '../store/actions/home';
import { Container, ErrorContainer } from '../components/layout';
import { getCharactersData, getFetchingError, getLoadingState } from '../store/selectors/home';
import List from '../components/list/List';
import CharacterThumb from '../components/list/CharacterItem';
import { withTheme } from 'styled-components';
import logo from '../assets/logo.jpg';
import magnify from '../assets/magnify.png';

class Home extends PureComponent {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#000'
    },
    headerLeft: <Image style={{ width: 100, height: 40, marginLeft: 20 }} source={logo} />,
    headerRight: (
      <TouchableOpacity style={{ width: 50, height: 40 }} onPress={() => {}}>
        <Image source={magnify} style={{ width: 50, height: 40 }}/>
      </TouchableOpacity>
    ),
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  _renderItem = ({ item }) => {
    const uri = `${item.thumbnail.path}.${item.thumbnail.extension}`;
    
    return (
      <CharacterThumb
        onPress={() => this.props.navigation.navigate('Detail', { id: item.id, uri })}
        name={item.name}
        loading={!item.loaded}
        size="full"
        uri={uri}
      />
    );
  }

  _getItemLayout = (_, index) => {
    const { height } = this.props.theme.thumbs.full;

    return { length: height, offset: height * index, index }
  }

  handleLoadingState = () => {
    const { isLoading, error, characters } = this.props;

    if (error) {
     return (
       <ErrorContainer>
         <Text>{error}</Text>
       </ErrorContainer>
     );
    }
    
    return (
      <Container bgColor="black">
        <List
          loading={isLoading}
          data={characters}
          extraData={isLoading}
          renderItem={this._renderItem}
          getItemLayout={this._getItemLayout}
        />
      </Container>
    );
  }

  render() {
    return this.handleLoadingState();
  }
}

const mapStateFormProps = (state, ownProps) => {
  return {
    ...ownProps,
    isLoading: getLoadingState(state),
    characters: getCharactersData(state),
    error: getFetchingError(state)
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchCharacters }, dispatch);

export default connect(mapStateFormProps, mapDispatchToProps)(withTheme(Home));
