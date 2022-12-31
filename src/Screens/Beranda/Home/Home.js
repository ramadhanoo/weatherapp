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
import moment from 'moment';
moment.locale('id');

const Home = props => {
  const {state, actions} = useHome();
  const {actionsData, onPressDetail} = actions;
  const {whRedux, activeId, weatherRedux} = state;
  return (
    <BaseScreens
      safeAreaColor={Colors.white}
      transparent={true}
      style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Header
          status={'Monstly Cloudy'}
          tmpHigest={parseInt(weatherRedux.data?.main?.temp_max ?? 0, 10)}
          tmpLowest={parseInt(weatherRedux.data?.main?.temp_min ?? 0, 10)}
          tempText={parseInt(weatherRedux.data?.main?.temp ?? 0, 10)}
          onPressDetail={onPressDetail}
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
                if (
                  moment(item.dt_txt).format('YYYYMMDD') ===
                  moment().format('YYYYMMDD')
                ) {
                  return (
                    <ChanceRain
                      key={index}
                      time={moment(item.dt_txt).format('HH:mm')}
                      title={item?.weather[0]?.description ?? ''}
                    />
                  );
                }
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
                  if (
                    moment(item.dt_txt).format('YYYYMMDD') ===
                    moment().format('YYYYMMDD')
                  ) {
                    return (
                      <DayForecast
                        key={index}
                        tempText={parseInt(item?.main?.temp ?? 0, 10)}
                        time={moment(item.dt_txt).format('HH:mm')}
                        title={`${item?.main?.humidity ?? 0}%`}
                      />
                    );
                  }
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
                shimmerSize={2}
                containerBodyStyle={styles.containerCardVertical}
                loadingContainerStyles={styles.containerCardVertical}
                loadingIndicatorStyle={styles.dayLoading}>
                {(whRedux.dailyForecast ?? []).map((item, index) => {
                  return (
                    <HourlyForecast
                      key={index}
                      id={item.dt}
                      itemData={item}
                      tmpHigest={parseInt(item?.temp_max ?? 0, 10)}
                      tmpLowest={parseInt(item?.temp_min ?? 0, 10)}
                      onPressItem={actionsData}
                      title={moment(item.dt_txt).format('DD MMM YYYY')}
                      whRedux={whRedux}
                      subTitle={item?.description ?? ''}
                      active={false}
                      activeId={activeId}
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
