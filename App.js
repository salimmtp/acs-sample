import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Routes} from './src/routes';
import i18next from './services/i18next'; // Do not remove this line
import {colors} from './src/config/theme';
const App = () => {
  // const isDarkMode = useColorScheme() === 'dark'; // detect system theme

  const backgroundStyle = {
    backgroundColor: colors.primary,
    display: 'flex',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Routes userToken={'test'} />
    </SafeAreaView>
  );
};

export default App;
