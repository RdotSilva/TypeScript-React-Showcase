import { SCREENS } from "../utils/screenUtils";
import { Subject } from "rxjs";

/**
 * Help to determine where we are on the page and to scroll into different page sections
 */
export default class ScrollService {
  // Create singleton class instance
  static scrollHandler = new ScrollService();

  // Instantiate the subject BROADCASTERS
  static currentScreenBroadcaster = new Subject();
  static currentScreenFadeIn = new Subject();

  // Add the scroll event to window
  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }

  // Scroll to contact me
  scrollToContactMe = () => {
    let contactMeScreen = document.getElementById("ContactMe");
    if (!contactMeScreen) return;

    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");
    if (!homeScreen) return;

    homeScreen.scrollIntoView({ behavior: "smooth" });
  };

  // Check if element is in view (if the document appears fully on screen)
  isElementInView = (elem: any, type: any) => {
    let rec = elem.getBoundingClientRect();
    // This method returns a DOMRect object providing information about the size of an element and its position relative to the viewport
    // The view port  refers to the part of the document you're viewing which is currently visible in its window
    let elementTop = rec.top;
    let elemBottom = rec.bottom;

    let partiallyVisible = elementTop < window.innerHeight && elemBottom >= 0;
    let completelyVisible = elementTop >= 0 && elemBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };

  // Check the screen that is currently under viewport (displayed fully)
  checkCurrentScreenUnderViewport = (event: any) => {
    if (!event || Object.keys(event).length < 1) return;

    for (let screen of SCREENS) {
      let screenFromDOM = document.getElementById(screen.screenName);
      if (!screenFromDOM) continue;

      let fullyVisible = this.isElementInView(screenFromDOM, "complete");
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          //BROADCAST FADE IN EFFECT
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screenName,
          });
          screen["alreadyRendered"] = true;
          break;
        }

        if (fullyVisible) {
          // Broadcast the screen name
          ScrollService.currentScreenBroadcaster.next({
            screenInView: screen.screenName,
          });
          break;
        }
      }
    }
  };
}
