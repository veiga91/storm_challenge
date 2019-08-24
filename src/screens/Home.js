import React, { PureComponent } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCharacters } from '../store/actions/home';
import { Container, LoadingContainer, ErrorContainer } from '../components/layout';
import { getCharactersData, getFetchingError, getLoadingState } from '../store/selectors/home';

class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  handleLoadingState = () => {
    const { isLoading, error } = this.props;

    if (isLoading) {
      return (
        <LoadingContainer>
          <ActivityIndicator />
        </LoadingContainer>
      );
    }
    
    if (error) {
     return (
       <ErrorContainer>
         <Text>{error}</Text>
       </ErrorContainer>
     );
    }
    
    if (this.props.characters.length === 0) {
      return (
        <ErrorContainer>
          <Text>Lista vazia</Text>
        </ErrorContainer>
      );
    }

    return (
      <Container>
        <Text>{this.props.characters[0].id}</Text>
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

export default connect(mapStateFormProps, mapDispatchToProps)(Home);
