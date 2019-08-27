import React, { PureComponent } from 'react';
import { Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCharacterDetail } from '../store/actions/detail';
import { ErrorContainer, LoadingContainer } from '../components/layout';
import { getCharacterData, getFetchingError, getLoadingState } from '../store/selectors/detail';
import { withTheme } from 'styled-components';
import { SafeAreaView } from 'react-navigation';
import { FloatingBackButtonHeader, Headerbanner } from '../components/header/Headers';
import Series from '../views/detail/Series';
import Stories from '../views/detail/Stories';
import { CharacterName } from '../views/detail/styled';

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
        <LoadingContainer>
          <ActivityIndicator size={"large"} color={this.props.theme.colors.white}/>
        </LoadingContainer>
      );
     }

    return (
      <ScrollView style={styles.scroll}>
        <CharacterName>{this.props.character.name}</CharacterName>
        <Series series={this.props.character.series} />
        <Stories stories={this.props.character.stories} />
      </ScrollView>
    );
  }

  goToHome = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: this.props.theme.colors.black }]}>
          <FloatingBackButtonHeader onPress={this.goToHome} />
          <Headerbanner uri={this.props.navigation.getParam('uri')} />
          {this.handleLoadingState()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  scroll: {
    paddingBottom: '100%',
    paddingHorizontal: 30
  }
});

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
