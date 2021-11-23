import AboutMe from "../components/AboutMe/AboutMe";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume";

export const SCREENS = [
  {
    screenName: "Home",
    component: Home,
  },
  {
    screenName: "About Me",
    component: AboutMe,
  },
  {
    screenName: "Resume",
    component: Resume,
  },
  {
    screenName: "Projects",
    component: Projects, 
  },
];

export const getScreenIndex = (screenName: String) => {
  if (!screenName) return -1;

  for (let i = 0; i < SCREENS.length; i++) {
    if (SCREENS[i].screenName === screenName) return i;
  }

  return -1;
};
