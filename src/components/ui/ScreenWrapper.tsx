import React from "react";
import { SCREENS } from "../../utils/screenUtils";

/**
 * Used to render all screens from the SCREENS constant
 */
const ScreenWrapper = () => {
  const mapAllScreens = () => {
    return SCREENS.map((screen: any) =>
      screen.component ? (
        <screen.component
          screenName={screen.screenName}
          key={screen.screenName}
          id={screen.screenName}
        />
      ) : (
        <div key={screen.screenName}></div>
      )
    );
  };

  return <div className="portfolio-container">{mapAllScreens()}</div>;
};

export default ScreenWrapper;
