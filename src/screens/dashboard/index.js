import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors, horizontalPadding} from '../../config/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons/faBell';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import {faFolderPlus} from '@fortawesome/free-solid-svg-icons/faFolderPlus';
import {faFileCirclePlus} from '@fortawesome/free-solid-svg-icons/faFileCirclePlus';
import {faKey} from '@fortawesome/free-solid-svg-icons/faKey';
import commonStyle from '../../config/commonStyle';

const NavItem = ({text, icon}) => (
  <TouchableOpacity style={styles.navItemContainer}>
    <FontAwesomeIcon icon={icon} color={'#FFF'} size={25} />
    <Text style={styles.navItemText}>{text}</Text>
  </TouchableOpacity>
);

const MenuIcon = ({icon}) => (
  <TouchableOpacity>
    <FontAwesomeIcon icon={icon} color={'#FFF'} size={18} />
  </TouchableOpacity>
);

export default Dashboard = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.navContainer}>
          <View style={styles.topMenuIconsContainer}>
            <View style={styles.topMenuIcons}>
              {[faBell, faUser, faQuestionCircle].map((e, i) => (
                <MenuIcon icon={e} key={`menu-icon-${i}`} />
              ))}
            </View>
          </View>
          <View>
            <Text style={[commonStyle.h1_Bold, styles.bottomMargin]}>
              Hello,
            </Text>
            <Text style={[commonStyle.h2_Bold_grey, styles.bottomMargin2]}>
              What would you like to do today?
            </Text>
          </View>
          <ScrollView horizontal>
            <View style={styles.navItemView}>
              <NavItem text={`Create${`\n`}Site`} icon={faFolderPlus} />
              <NavItem text={`CAME${`\n`}Key`} icon={faKey} />
              <NavItem
                text={`Create${`\n`}Site Owner`}
                icon={faFileCirclePlus}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={[commonStyle.h2_Bold_grey, styles.bodyTitleTxt]}>
            Your Dashboard
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.offwhite},
  navContainer: {
    height: 255,
    backgroundColor: colors.primary,
    paddingHorizontal: horizontalPadding,
  },
  topMenuIconsContainer: {
    marginTop: 25,
    marginBottom: 35,
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  topMenuIcons: {
    display: 'flex',
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
  },
  bottomMargin: {marginBottom: 5},
  bottomMargin2: {marginBottom: 20},
  navItemView: {display: 'flex', flexDirection: 'row'},
  // NavItem
  navItemContainer: {
    height: 80,
    width: 120,
    borderRadius: 6,
    paddingHorizontal: 20,
    backgroundColor: '#252e3a',
    display: 'flex',
    justifyContent: 'center',
    marginRight: 15,
  },
  navItemText: {
    marginTop: 10,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 10,
  },
  // body
  bodyContainer: {
    paddingHorizontal: horizontalPadding,
    paddingTop: 30,
  },
  bodyTitleTxt: {
    color: colors.black,
    marginBottom: 10,
  },
});
