import React, { useState, useEffect } from "react";
import { SCREENS, getScreenIndex } from "../../utils/screenUtils";
import ScrollService from "../../services/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen: any) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = getScreenIndex(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    return SCREENS.map((screen, i) => (
      <div
        key={screen.screenName}
        className={getHeaderOptionsClasses(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screenName}</span>
      </div>
    ));
  };

  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option ";
    if (index < SCREENS.length - 1) classes += "header-option-separator";

    if (selectedScreen === index) classes += "selected-header-option";

    return classes;
  };

  const switchScreen = (index: any, screen: any) => {
    let screenComponent = document.getElementById(screen.screenName);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return <div>Header</div>;
};

export default Header;
