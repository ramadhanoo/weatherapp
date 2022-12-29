import React from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import styles from './HourlyForecast.styles';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../../../../../Themes';
import {TempText} from '../../../../../Components/TempText/TempText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Section} from '../../../../../Components';
import DayForecast from '../DayForecast/DayForecast';
const HourlyForecast = ({
  time,
  title,
  onPressItem,
  tempText,
  subTitle,
  tmpHigest,
  tmpLowest,
  whRedux,
  active,
  id,
  activeId,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPressItem(id)}
      activeOpacity={0.8}
      style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.containerOne}>
          <Text numberOfLines={1} style={styles.heading}>
            <Feather
              name="cloud-rain"
              color={Colors.mainColor}
              size={Fonts.size.medium}
            />
          </Text>
        </View>
        <View style={styles.containerTwo}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.subTitle}>
            {subTitle}
          </Text>
        </View>
        <View style={styles.containerThree}>
          <View style={styles.containerSuhu}>
            <Ionicons
              name="ios-arrow-up-outline"
              size={Fonts.size.small}
              color={Colors.greyText}
            />
            <TempText
              iconSize={6}
              textSize={Fonts.size.small}
              title={tmpHigest}
              fontTmpStyles={styles.tmpTextStyles}
              colorText={Colors.black}
            />
          </View>
          <View style={styles.containerSuhu}>
            <Ionicons
              name="ios-arrow-down-outline"
              size={Fonts.size.small}
              color={Colors.greyText}
            />
            <TempText
              iconSize={6}
              textSize={Fonts.size.small}
              title={tmpLowest}
              fontTmpStyles={styles.tmpTextStyles}
              colorText={Colors.black}
            />
          </View>
        </View>
      </View>
      {activeId.includes(id) ? (
        <View style={styles.cardHidden}>
          <View style={styles.containerWind}>
            <View style={styles.cardWind}>
              <FontAwesome
                name={'umbrella'}
                size={Fonts.size.medium}
                color={Colors.greyText}
              />
              <Text style={styles.textTitle}>Chance</Text>
              <Text style={styles.textSubtitle}>90%</Text>
            </View>
            <View style={styles.cardWind}>
              <Ionicons
                name={'md-water-outline'}
                size={Fonts.size.medium}
                color={Colors.greyText}
              />
              <Text style={styles.textTitle}>Preception</Text>
              <Text style={styles.textSubtitle}>90%</Text>
            </View>
            <View style={styles.cardWind}>
              <Fontisto
                name={'wind'}
                size={Fonts.size.medium}
                color={Colors.greyText}
              />
              <Text style={styles.textTitle}>Wind</Text>
              <Text style={styles.textSubtitle}>90%</Text>
            </View>
            <View style={styles.cardWind}>
              <Ionicons
                name={'md-sunny-outline'}
                size={Fonts.size.medium}
                color={Colors.greyText}
              />
              <Text style={styles.textTitle}>Chance</Text>
              <Text style={styles.textSubtitle}>90%</Text>
            </View>
          </View>
          <View style={styles.forecasDailyContainer}>
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
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

HourlyForecast.defaultProps = {
  time: '',
  title: '',
  subTitle: 'Light rain shower',
  onPressItem: () => {},
  tempText: '12',
  tmpHigest: '10',
  tmpLowest: '10',
  active: false,
  id: 0,
  activeId: [],
};

export default HourlyForecast;
