import React, { PureComponent } from 'react';
import { SearchInput, SearchBarContainer } from './styled';
import { Button } from 'react-native';

class SearchBar extends PureComponent {
  state = {
    value: ''
  }
  
  _onChangeText = (value) => {
    this.props._onChange(value);
    this.setState({ value })
  }

  onCancel  = () => {
    this.setState({ value: '' });
  }

  render() {
    return (
      <SearchBarContainer>
        <SearchInput
          value={this.state.value}
          onChangeText={this._onChangeText}
          editable = {true}
          autoFocus={true}
        />
        <Button
          onPress={this.onCancel}
          title="Cancel"
          color="blue"
        />
      </SearchBarContainer>
    );
  }
}

export default SearchBar;
