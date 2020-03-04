import { createSwitchNavigator, createAppContainer } from "react-navigation";
import StartPage from "./src/screens/StartPage";
import GamePlayPage from "./src/screens/GamePlayPage";

const AppNavigator = createSwitchNavigator(
  {
    StartPage: StartPage,
    GamePlayPage: GamePlayPage
  },
  {
    initialRouteName: "StartPage"
  }
);

export default  AppContainer = createAppContainer(AppNavigator);