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

  return <div>Header</div>;
};

export default Header;
