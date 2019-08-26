import { scale, verticalScale } from 'react-native-size-matters';

const colors = {
  lightGrey: '#CDCDCD',
  white: '#FFFFFF',
  black: '#000'
};

const thumbs = {
  regular: {
    width: scale(100),
    height: verticalScale(100)
  },
  full:{
    width: '100%',
    height: verticalScale(150)
  }
}

export default {
  colors,
  thumbs
};
