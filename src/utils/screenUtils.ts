import AboutMe from "../components/AboutMe/AboutMe";
import Home from "../components/Home/Home";
import Resume from "../components/Resume/Resume";

export const SCREENS = [
  {
    screenName: "Home",
    component: Home,
  },
  {
    screenName: "AboutMe",
    component: AboutMe,
  },
  {
    screenName: "Resume",
    component: Resume,
  },
];

export const getScreenIndex = (screenName: String) => {
  if (!screenName) return -1;

  for (let i = 0; i < SCREENS.length; i++) {
    if (SCREENS[i].screenName === screenName) return i;
  }

  return -1;
};
