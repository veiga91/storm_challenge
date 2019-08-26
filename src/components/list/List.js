import React, { PureComponent } from 'react';
import { FlatList, ActivityIndicator, Text } from 'react-native';
import { LoadingContainer, ErrorContainer, Separator } from '../layout';

class List extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      data: [],
    }

    this.viewabilityConfig = {
      waitForInteraction: true,
      itemVisiblePercentThreshold: props.itemVisiblePercentThreshold
    }

    this.list = React.createRef();
  }

  static defaultProps = {
    style: {},
    contentStyle: {},
    data: [],
    itemVisiblePercentThreshold: 90,
    scrollEnabled: true,
    loading: false
  }


  static getDerivedStateFromProps(props, state) {
    if (state.data.length === 0) {
      return { data: props.data }
    }

    return null;
  }

  componentDidMount() {
    this.list.current.recordInteraction();
  }

  _keyExtractor = (item) => `${item.id}`

  itemsNotLoadedYet = (items) => items.filter(({ item }) => !item.loaded)

  handleLazyLoad = ({ viewableItems }) => {
    const { data } = this.state;
    const itemsNotLoadedYet = this.itemsNotLoadedYet(viewableItems);

    if (itemsNotLoadedYet.length > 0) {
      const newData = data.map((image) => {
        return viewableItems.find(({ item, isViewable }) => item.id === image.id && !item.loaded && isViewable)
          ? { ...image, loaded: true }
          : image
      });
  
      this.setState({ data: newData });
    }
  }
 
  renderEmptyPlaceholder = () => {
    if (this.props.loading) {
      return (
        <LoadingContainer>
          <ActivityIndicator size="large" />
        </LoadingContainer>
      )
    }
    
    return (
      <ErrorContainer>
        <Text>Lista Vazia</Text>
      </ErrorContainer>
    );
  }

  render() {
    return (
      <FlatList
        ref={this.list}
        viewabilityConfig={this.viewabilityConfig}
        data={this.state.data}
        extraData={this.props.extraData}
        renderItem={this.props.renderItem}
        keyExtractor={this.props.keyExtractor || this._keyExtractor}
        horizontal={this.props.horizontal}
        contentContainerStyle={this.props.containerStyle}
        style={this.props.customStyle}
        showsHorizontalScrollIndicator={false}
        getItemLayout={this.props.getItemLayout}
        ItemSeparatorComponent={this.props.hasDivider ? CustomDivider : null}
        ListEmptyComponent={this.renderEmptyPlaceholder}
        scrollEnabled={this.props.scrollEnabled && this.props.data.length > 0}
        onViewableItemsChanged={this.handleLazyLoad}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={this.props.separator}
      />
    )
  }
}

export default List;
