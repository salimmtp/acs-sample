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
import {faQuestionCircle as faQuestionCircleRegular} from '@fortawesome/free-regular-svg-icons/faQuestionCircle';
import {faFolderPlus} from '@fortawesome/free-solid-svg-icons/faFolderPlus';
import {faFileCirclePlus} from '@fortawesome/free-solid-svg-icons/faFileCirclePlus';
import {faKey} from '@fortawesome/free-solid-svg-icons/faKey';
import {faClipboard} from '@fortawesome/free-regular-svg-icons/faClipboard';
import {faClipboard as faClipboardSolid} from '@fortawesome/free-solid-svg-icons/faClipboard';
import {faBuilding} from '@fortawesome/free-regular-svg-icons/faBuilding';
import {faStore} from '@fortawesome/free-solid-svg-icons/faStore';
import {faHeadphonesSimple} from '@fortawesome/free-solid-svg-icons/faHeadphonesSimple';
import {faHouse} from '@fortawesome/free-solid-svg-icons/faHouse';
import {faSitemap} from '@fortawesome/free-solid-svg-icons/faSitemap';
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

const DashobardItem = ({count = false, itemHeading, icon, style = {}}) => (
  <View
    style={[
      {
        height: 150,
        flex: 1,

        backgroundColor: colors.primary,
        borderRadius: 8,
        overflow: 'hidden',
        paddingVertical: 15,
      },
      style,
    ]}>
    <View>
      <View style={{paddingLeft: 10}}>
        {count ? (
          <Text
            style={[commonStyle.h1_Bold, {fontSize: 25}, styles.bottomMargin]}>
            {count}
          </Text>
        ) : null}
        <Text
          style={[
            commonStyle.p_regular_grey,
            {color: '#b6b9bd', fontSize: 14},
            styles.pMarginLast,
          ]}>
          {itemHeading}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '112%',
          height: 'auto',
          marginTop: 15,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <FontAwesomeIcon icon={icon} color={'#0d3249'} size={100} />
      </View>
    </View>
  </View>
);

TabIcon = ({title, icon, active = false}) => (
  <View
    style={{
      height: 60,
      width: 70,
      borderRadius: 8,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: active ? '#ececed' : 'rgba(0,0,0,0)',
    }}>
    <FontAwesomeIcon
      icon={icon}
      color={active ? '#404a4e' : '#979fa3'}
      size={20}
    />
    <Text
      style={{
        color: active ? '#404a4e' : '#979fa3',
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 5,
      }}>
      {title}
    </Text>
  </View>
);

export default Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
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
                <NavItem text={`${`\n`}Keys`} icon={faKey} />
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
            <View
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                marginBottom: 10,
              }}>
              <DashobardItem
                icon={faClipboard}
                count={13}
                itemHeading={`Site${`\n`}Owner`}
                style={{marginRight: 5}}
              />
              <DashobardItem
                icon={faBuilding}
                count={54}
                itemHeading={`Sites`}
                style={{marginLeft: 5}}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
              }}>
              <DashobardItem
                icon={faHeadphonesSimple}
                count={false}
                itemHeading={`Support`}
                style={{marginRight: 5}}
              />
              <DashobardItem
                icon={faStore}
                count={false}
                itemHeading={`Web Shop`}
                style={{marginLeft: 5}}
              />
            </View>
            {/* <FontAwesomeIcon icon={faClipboard} color={'#000'} size={25} /> */}
            {/* <FontAwesomeIcon icon={faBuilding} color={'#000'} size={25} />
          <FontAwesomeIcon icon={faHeadphonesSimple} color={'#000'} size={25} />
          <FontAwesomeIcon icon={faStore} color={'#000'} size={25} /> */}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          height: 80,
          backgroundColor: '#FFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <TabIcon icon={faHouse} title="Home" active />
        <TabIcon icon={faClipboardSolid} title="Sites" />
        <TabIcon icon={faQuestionCircleRegular} title="Support" />
        <TabIcon icon={faSitemap} title="Contact" />
      </View>
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
    display: 'flex',
  },
  bodyTitleTxt: {
    color: colors.black,
    marginBottom: 10,
  },
});
