import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {BleManager} from 'react-native-ble-plx';
import {request, PERMISSIONS} from 'react-native-permissions';
import useBLE, {POKEMON_STATE} from './useBLE';

const BluetoothScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [devices, setDevices] = useState([]);
  const [connectedDevices, setConnectedDevices] = useState([]);
  const [manager, setManager] = useState(new BleManager());

  const {
    yourParty,
    connectedDevice,
    requestPermissions,
    scanForPeripherals,
    connectToDevice,
    allDevices,
    billsPC,
    exchangePokemon,
  } = useBLE();

  // useEffect(() => {
  //   console.log('it worked!');
  //   checkBluetoothPermission();

  //   return () => {
  //     manager.stopDeviceScan();
  //   };
  // }, []);

  useEffect(() => {
    console.log('heloo');
    scanForDevices();
  }, []);

  const scanForDevices = () => {
    requestPermissions(isGranted => {
      if (isGranted) {
        console.log('permission', isGranted);
        // scanForPeripherals();
      } else {
        console.log('else ');
      }
    });
  };

  useEffect(() => {
    // Start scanning for devices when the component mounts
    startScanBLE();

    // Stop scanning when the component unmounts
    return () => {
      stopScanBLE();
    };
  }, []);

  const startScanBLE = () => {
    setScanning(true);
    setDevices([]);
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error('Error scanning for devices:', error);
        return;
      }

      console.log({
        name: device.name,
        localname: device.localName,
      });

      if (
        device &&
        (device.name?.includes('Nordic') ||
          device.localName?.includes('Nordic'))
      ) {
        stopScanBLE();
        // Update the devices state with the new device
        setDevices(prevDevices => {
          const existingDeviceIndex = prevDevices.findIndex(
            d => d.id === device.id,
          );
          if (existingDeviceIndex !== -1) {
            // Replace the existing device with the updated information
            prevDevices[existingDeviceIndex] = device;
            return [...prevDevices];
          } else {
            // Add the new device to the list
            return [...prevDevices, device];
          }
        });
      }
    });
  };

  const stopScanBLE = () => {
    manager.stopDeviceScan();
    setScanning(false);
  };

  const checkBluetoothPermission = async () => {
    try {
      let locationPermission;

      console.log('Platform is: ' + Platform.OS);
      if (Platform.OS === 'android') {
        // Request location permission explicitly
        console.log('1');
        locationPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'Bluetooth scanning requires access to your location.',
          },
        );

        console.log({
          locationPermission,
          permission: PermissionsAndroid.RESULTS.GRANTED,
        });

        // Check if location permission is granted
        if (locationPermission === PermissionsAndroid.RESULTS.GRANTED) {
          console.log(3, PermissionsAndroid.PERMISSIONS.BLUETOOTH);
          // Request Bluetooth permission
          const bluetoothPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH,
            {
              title: 'Bluetooth Permission',
              message: 'Bluetooth scanning requires access to Bluetooth.',
            },
          );
          console.log({
            bluetoothPermission,
            permission: PermissionsAndroid.RESULTS.GRANTED,
          });

          // Check if Bluetooth permission is granted
          if (bluetoothPermission === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Bluetooth permission granted');
          } else {
            console.warn('Bluetooth permission denied');
          }
        } else {
          console.warn('Location permission denied');
        }
      } else {
        console.log('it went to else');
        // For iOS, request Bluetooth peripheral permission
        const permission = await request(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL);

        if (permission === 'granted') {
          console.log('Bluetooth permission granted');
        } else {
          console.warn('Bluetooth permission denied');
        }
      }
    } catch (error) {
      console.error('Error checking Bluetooth permission:', error);
    }
  };

  const getServicesAndCharacteristics = device => {
    return new Promise((resolve, reject) => {
      device.services().then(services => {
        const characteristics = [];
        console.log('ashu_1', services);
        services.forEach((service, i) => {
          service.characteristics().then(c => {
            console.log('service.characteristics');

            characteristics.push(c);
            console.log(characteristics);
            if (i === services.length - 1) {
              const temp = characteristics.reduce((acc, current) => {
                return [...acc, ...current];
              }, []);
              const dialog = temp.find(
                characteristic => characteristic.isWritableWithoutResponse,
              );
              if (!dialog) {
                reject('No writable characteristic');
              }
              resolve(dialog);
            }
          });
        });
      });
    });
  };

  const connectDevice = device => {
    const serviceUUIDs = device.serviceUUIDs[0];

    manager.stopDeviceScan();
    //listener for disconnection
    /* this.manager.onDeviceDisconnected(device.id, (error, device) => {
        console.log(error);
        console.log("errordddd",device);
        // if(this.props.device.isConnected) {
        //     this.scanAndConnect()
        // }
        
    });*/
    manager
      .connectToDevice(device.id, {autoConnect: true})
      .then(device => {
        (async () => {
          const services = await device.discoverAllServicesAndCharacteristics();
          console.log({services});
          const characteristic = await getServicesAndCharacteristics(services);
          console.log('characteristic');
          console.log(characteristic);
          console.log(
            'Discovering services and characteristics',
            characteristic.uuid,
          );
          // this.setState({"deviceid":device.id, serviceUUID:serviceUUIDs, characteristicsUUID : characteristic.uuid,device:device })
          // this.setState({text1:"Conneted to "+device.name})
        })();
        // this.setState({device:device})
        return device.discoverAllServicesAndCharacteristics();
      })
      .then(device => {
        // return this.setupNotifications(device)
      })
      .then(
        () => {
          console.log('Listening...');
        },
        error => {
          this.alert('Connection error' + JSON.stringify(error));
        },
      );
    setConnectedDevices([device]);
  };

  const connectToDeviceLocal = async device => {
    try {
      console.log({device, deviceId: device.id});
      manager.stopDeviceScan();
      // sca;
      const deviceConnection = await manager.connectToDevice(device.id);
      console.log({
        deviceConnection,
        connection: deviceConnection.isConnected(),
      });
      // setConnectedDevice(deviceConnection);
      const charecteristics =
        await deviceConnection.discoverAllServicesAndCharacteristics();
      console.log({charecteristics});
      console.log('CONNECTED');
      setConnectedDevices([deviceConnection]);
      deviceConnection
        .isConnected()
        .then(bool => console.log(' Manager Connected', bool));
      // startStreamingData(deviceConnection);
    } catch (e) {
      console.log('FAILED TO CONNECT', e);
    }
  };

  const renderItem = ({item}) => (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text>{item.name || 'Unknown Device'}</Text>
        <Text>{item.id}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          connectDevice(item);
        }}>
        <Text>connect</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          // console.log(item.id, {dsadsa: connectedDevices[0].cancelConnection});

          manager
            .isDeviceConnected(item.id)
            .then(bool => console.log(' Manager Connected', bool));
          // connectedDevices[0].cancelConnection();
          // await manager.cancelDeviceConnection(item.id);
        }}>
        <Text>connected?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          // console.log(item.id, {dsadsa: connectedDevices[0].cancelConnection});

          // manager
          //   .isDeviceConnected(item.id)
          //   .then(bool => console.log(' Manager Connected', bool));
          // connectedDevices[0].cancelConnection();
          console.log(item.id);
          await manager.cancelDeviceConnection(item.id);
        }}>
        <Text>cancel</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Button
        title={scanning ? 'Stop Scan' : 'Start Scan'}
        onPress={scanning ? stopScanBLE : startScanBLE}
      />
      <FlatList
        data={devices}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

      <FlatList
        data={connectedDevices}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default BluetoothScanner;
