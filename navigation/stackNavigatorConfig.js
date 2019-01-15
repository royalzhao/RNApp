import { createStackNavigator } from 'react-navigation';
const stackNavigatorConfig = {
    initialRouteName: 'Login',
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: 'white',
      showIcon: true,
      swipeEnabled: false,
      animationEnabled: false,
      headerStyle: {
        backgroundColor: '#f2f2f2'
      }
    },
    mode: 'card',
    paths: 'rax/: Login',
    headerMode: 'float',
    transitionConfig: (() => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal // android's config about jump to next page 
    })),
    onTransitionStart: () => {},
    onTransitionEnd: () => {}
};
export default stackNavigatorConfig;