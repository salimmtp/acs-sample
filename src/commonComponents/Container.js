const {View, StyleSheet} = require('react-native');
const {colors, horizontalPadding} = require('../config/theme');

export default Container = ({children}) => (
  <View style={style.conainer}>{children}</View>
);

const style = StyleSheet.create({
  conainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: horizontalPadding,
  },
});
