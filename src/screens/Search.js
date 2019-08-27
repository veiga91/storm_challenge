import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCharactersByName } from '../store/actions/search';
import { Container, ErrorContainer, Separator } from '../components/layout';
import { getCharactersData, getFetchingError, getLoadingState } from '../store/selectors/search';
import List from '../components/list/List';
import CharacterInRow from '../views/search/CharacterInRow';
import { withTheme } from 'styled-components';
import SearchBar from '../components/header/SearchBar';
import { SafeAreaView } from 'react-navigation';

class Search extends PureComponent {

  static navigationOptions = () => {
    return { header: null }
  }

  goToDetail = (id, uri) => () => {
    this.props.navigation.navigate('Detail', { id, uri });
  }

  _renderItem = ({ item }) => {
    const uri = `${item.thumbnail.path}.${item.thumbnail.extension}`;
    
    return (
      <CharacterInRow
        onPress={this.goToDetail(item.id, uri)}
        name={item.name}
        loading={!item.loaded}
        size="regular"
        uri={uri}
      />
    );
  }

  _getItemLayout = (_, index) => {
    const { height } = this.props.theme.thumbs.regular;

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
        <SafeAreaView style={[styles.container, { backgroundColor: this.props.theme.colors.black }]}>
          <SearchBar _onChange={this.props.fetchCharactersByName} />
        </SafeAreaView>
        <List
          loading={isLoading}
          data={characters}
          extraData={isLoading}
          renderItem={this._renderItem}
          getItemLayout={this._getItemLayout}
          separator={Separator}
          customStyle={styles.list}
        />
      </Container>
    );
  }

  render() {
    return this.handleLoadingState();
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  list: {
    paddingTop: 80
  }
});

const mapStateFormProps = (state, ownProps) => {
  return {
    ...ownProps,
    isLoading: getLoadingState(state),
    characters: getCharactersData(state),
    error: getFetchingError(state)
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchCharactersByName }, dispatch);

export default connect(mapStateFormProps, mapDispatchToProps)(withTheme(Search));
