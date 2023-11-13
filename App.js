import {useState, useMemo, useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Routes} from './src/routes';
import i18next from './services/i18next'; // Do not remove this line
import {colors} from './src/config/theme';
import {AuthContext} from './src/context';
import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
} from './src/config/AccessToken';
import {PageLoader} from './src/commonComponents/Loader';

import Home from './src/screens/home';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark'; // detect system theme
  const [isLoading, setLoading] = useState(true);
  const [userToken, setUserToken] = useState(false);

  const authContext = useMemo(() => {
    return {
      signIn: token => {
        // setLoading(false);
        setUserToken(token);
        // setAccessToken(token);
      },
      signOut: () => {
        // setLoading(false);
        setUserToken(null);
        // removeAccessToken();
      },
      token: userToken,
    };
  });

  const backgroundStyle = {
    backgroundColor: colors.primary,
    display: 'flex',
    flex: 1,
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AuthContext.Provider value={authContext}>
        <Routes userToken={userToken} />
      </AuthContext.Provider>
    </SafeAreaView>
  );
};

export default App;
