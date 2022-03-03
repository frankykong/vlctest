/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {VLCPlayer} from 'react-native-vlc-media-player';

const calcVLCPlayerHeight = (windowWidth, aspetRatio) => {
  return windowWidth * aspetRatio;
};

// 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov'
// 'http://web.art-cloud.com/lesson/2160/media?view=web'
// rtmp://pili-live-rtmp.art-cloud.com/art-cloud/LS-6218a6d2b668c
// http://cloud.art-cloud.com/lesson/lesson-2022-2-22-12ihhk103mkg0

const TestPlayer: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Header title="test"/> */}
          <View>
            <Text style={styles.heading}>RN VLC Media Player</Text>
          </View>
          <View style={styles.body}>
            <VLCPlayer
              source={{
                initType: 2,
                hwDecoderEnabled: 1,
                hwDecoderForced: 1,
                uri:
                  'http://cloud.art-cloud.com/lesson/lesson-2022-2-22-12ihhk103mkg0',
                initOptions: [
                  '--no-audio',
                  '--rtsp-tcp',
                  '--network-caching=150',
                  '--rtsp-caching=150',
                  '--no-stats',
                  '--tcp-caching=150',
                  '--realrtsp-caching=150',
                ],
              }}
              autoplay={true}
              autoAspectRatio={true}
              resizeMode="cover"
              // videoAspectRatio={"4:3"}
              isLive={false}
              autoReloadLive={true}
              style={{
                height: calcVLCPlayerHeight(
                  Dimensions.get('window').width,
                  3 / 4,
                ),
                marginTop: 30,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.black,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default TestPlayer;
