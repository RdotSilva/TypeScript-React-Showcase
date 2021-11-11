import Home from "../components/Home/Home";

export const SCREENS = [
  {
    screenName: "Home",
    component: Home,
  },
];

export const getScreenIndex = (screenName: String) => {
  if (!screenName) return -1;

  for (let i = 0; i < SCREENS.length; i++) {
    if (SCREENS[i].screenName === screenName) return i;
  }

  return -1;
};
