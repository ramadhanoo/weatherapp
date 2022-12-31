import React from 'react';
import styles from './Detail.styles';
import {useDetail} from './useDetail';
import {BaseScreens, HeaderDetail, Button} from '../../../Components/index';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Colors} from '../../../Themes';
import {DATA_SETTINGS} from '../../../Data/Constans';
import CardSettings from './content/CardSetinggs/CardSettings';
import CardActual from './content/CardActual/CardActual';

const Detail = props => {
  const {state, actions} = useDetail();
  const {
    done,
    cancel,
    switchPress,
    switchPressWeatherUpdate,
    switchPressSevereUpdate,
    setActiveDistance,
  } = actions;
  const {
    weatherRedux,
    dataSettings,
    dataSettingsWeatherUpdate,
    dataSettingsSevereUpdate,
    activeDistance,
  } = state;

  return (
    <BaseScreens safeAreaColor={Colors.background} style={styles.container}>
      <HeaderDetail
        leftPress={done}
        rightPress={cancel}
        status={'Monstly Cloudy'}
        tmpHigest={parseInt(weatherRedux.data?.main?.temp_max ?? 0, 10)}
        tmpLowest={parseInt(weatherRedux.data?.main?.temp_min ?? 0, 10)}
        tempText={parseInt(weatherRedux.data?.main?.temp ?? 0, 10)}
      />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.containerSettings}>
          {dataSettings.map((item, index) => {
            return (
              <CardSettings
                activeDistance={activeDistance}
                setActiveDistance={setActiveDistance}
                key={index}
                switchPress={switchPress}
                data={item}
              />
            );
          })}
        </View>
        <View style={styles.containerSettings}>
          <Text style={styles.textTitle}>WEATHER UPDATE</Text>
          {dataSettingsWeatherUpdate.map((item, index) => {
            return (
              <CardSettings
                activeDistance={activeDistance}
                setActiveDistance={setActiveDistance}
                key={index}
                switchPress={switchPressWeatherUpdate}
                data={item}
              />
            );
          })}
        </View>

        <View style={styles.containerSettings}>
          <Text style={styles.textTitle}>SEVERE WEATHER</Text>
          {dataSettingsSevereUpdate.map((item, index) => {
            return (
              <CardSettings
                activeDistance={activeDistance}
                setActiveDistance={setActiveDistance}
                key={index}
                switchPress={switchPressSevereUpdate}
                data={item}
              />
            );
          })}
        </View>
        <View style={styles.containerSettings}>
          <Text style={styles.textTitle}>ACTUAL LOCATION</Text>
          <CardActual
            title={'London, UK'}
            iconName={'md-location-sharp'}
            colorBackground={Colors.colarBlue}
            subTitle={'51201920382938'}
          />
        </View>

        <Button
          isLoading={false}
          styleButton={styles.button}
          text={'Reset Location'}
          styleText={styles.textButton}
          onPress={() => {}}
        />
      </ScrollView>
    </BaseScreens>
  );
};

Detail.options = {
  topBar: {
    visible: false,
  },
  modalPresentationStyle: 'overCurrentContext',
  layout: {
    backgroundColor: 'transparent',
    componentBackgroundColor: 'transparent',
  },
};

export default Detail;
