import React from 'react';
import styles from './Home.styles';
import {useHome} from './useHome';
import {BaseScreens, Header} from '../../../Components/index';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../Themes';
import {Section} from '../../../Components/index';
import ChanceRain from './content/ChanceRain/ChanceRain';
import DayForecast from './content/DayForecast/DayForecast';
import HourlyForecast from './content/HourlyForecast/HourlyForecast';
const Home = props => {
  const {state, actions} = useHome();
  const {actionsData, onPressDetail} = actions;
  const {whRedux} = state;

  return (
    <BaseScreens
      safeAreaColor={Colors.white}
      transparent={true}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          status={'Monstly Cloudy'}
          tmpHigest={20}
          tmpLowest={14}
          tempText={'19'}
        />
        <View style={styles.hourlyContainer}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Section
              isLoading={whRedux.loading}
              shimmerSize={2}
              containerBodyStyle={styles.containerCard}
              loadingContainerStyles={styles.containerCard}
              loadingIndicatorStyle={styles.loadingStyle}>
              {(whRedux.data?.list ?? []).map((item, index) => {
                return (
                  <ChanceRain
                    key={index}
                    time={'24:00'}
                    title={'ini adalah saya gue'}
                  />
                );
              })}
            </Section>
          </ScrollView>
          <View style={styles.forecasDailyContainer}>
            <Text style={styles.titleDialy}>HOURLY FORECAST</Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              <Section
                isLoading={whRedux.loading}
                shimmerSize={10}
                containerBodyStyle={styles.containerCard}
                loadingContainerStyles={styles.containerCard}
                loadingIndicatorStyle={styles.dayLoading}>
                {(whRedux.data?.list ?? []).map((item, index) => {
                  return (
                    <DayForecast key={index} time={'24:00'} title={'0%'} />
                  );
                })}
              </Section>
            </ScrollView>
          </View>
          <View style={styles.dailyContainer}>
            <Text style={styles.titleDialy}>NEXT 14 DAYS</Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={false}>
              <Section
                isLoading={whRedux.loading}
                shimmerSize={10}
                containerBodyStyle={styles.containerCardVertical}
                loadingContainerStyles={styles.containerCardVertical}
                loadingIndicatorStyle={styles.dayLoading}>
                {(whRedux.data?.list ?? []).map((item, index) => {
                  return (
                    <HourlyForecast
                      key={index}
                      time={'24:00'}
                      title={'Tomorrow'}
                    />
                  );
                })}
              </Section>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </BaseScreens>
  );
};

Home.options = {
  topBar: {
    visible: false,
  },
};

export default Home;
