import AsyncStorage from '@react-native-async-storage/async-storage';

/* -------- ACCESS TOKEN -------- */

export const USER_KEY = '@accToken';

export const setAccessToken = async (value, key = USER_KEY) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log({e});
  }
};

export const setAccessTokenNUserId = async (token, userId, regStatus) => {
  try {
    AsyncStorage.multiSet([
      ['@accToken', token],
      ['userId', userId.toString()],
      ['regStage', regStatus.toString()],
    ]);
  } catch (e) {}
};

export const getAccessToken = (key = USER_KEY) => {
  return AsyncStorage.getItem(key);
};

export const getTokenLanguageRegStage = async () => {
  let values;
  try {
    values = await AsyncStorage.multiGet([USER_KEY, 'lang', 'regStage']);
  } catch (e) {}
  return values;
};

export const getTokenNUserId = async () => {
  let values;
  try {
    values = await AsyncStorage.multiGet([USER_KEY, 'userId']);
  } catch (e) {}
  return values;
};

export const removeAccessToken = async (key = USER_KEY) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
  clearAll();
};

// Clear Async storage
export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }
};
