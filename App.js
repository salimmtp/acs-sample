import {useState, useMemo, useEffect} from 'react';
import {Linking, SafeAreaView, StatusBar, Alert} from 'react-native';
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

console.disableYellowBox = true;

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

  useEffect(() => {
    const getUrl = async () => {
      const initialUrl = await Linking.getInitialURL();

      if (initialUrl !== null) {
        Alert.alert('first opening' + initialUrl);
        return;
      }

      // Alert.alert('second opening' + initialUrl);
    };
    getUrl();
  }, []);

  useEffect(() => {
    Linking.addEventListener('url', ({url}) => {
      Alert.alert('subscription' + url);
    });

    return () => {
      Linking.removeEventListener('url', ({url}) => {
        Alert.alert('unsubscribe' + url);
      });
    };
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
