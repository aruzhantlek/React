import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading, Asset } from 'expo';

import Navigation from './navigation';
import { Block } from './components';

// import all used images
const images = [
  require('./assets/icons/back.png'),
  require('./assets/icons/planet.png'),
  require('./assets/icons/startup (1).png'),
  require('./assets/images/kylo-ren-shuttle.png'),
  require('./assets/images/millennium-falcon.png'),
  require('./assets/images/tie-fighter.png'),
  require('./assets/images/jedi-starfighter.png.png'),
  require('./assets/images/x-wing.png.png'),
  require('./assets/images/slave-i.png'),
  require('./assets/images/tie-fighter.png'),
  require('./assets/images/jedi-starfighter.png'),
  require('./assets/images/millennium-falcon.png'),
  require('./assets/images/illustration_1.png'),
  require('./assets/images/illustration_2.png'),
  require('./assets/images/illustration_3.png'),
  require('./assets/images/avatar.png'),
];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  handleResourcesAsync = async () => {

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
          <AppLoading
              startAsync={this.handleResourcesAsync}
              onError={error => console.warn(error)}
              onFinish={() => this.setState({ isLoadingComplete: true })}
          />
      )
    }

    return (
        <Block white>
          <Navigation />
        </Block>
    );
  }
}

const styles = StyleSheet.create({
});