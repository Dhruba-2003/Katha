/* ------------------------------------------------------------------
 * Central asset registry.
 *
 * Every image used across the site is imported here once as a named
 * import and re-exported both individually and through the `Assets`
 * namespace object.
 *
 *   import { Assets } from "@/assets/Assets";
 *   <Image src={Assets.HeroBgImage} ... />
 *
 * Drop your downloaded files into `assets/images/` keeping the same
 * file name (or update the import below) and the whole site updates.
 * ------------------------------------------------------------------ */

import HeroBgImage from "./images/HeroBgImage.png";
import ExperienceBg from "./images/ExperienceBg.png";
import ExperienceRightMockup from "./images/ExperienceRightMockup.png";
import QrCode from "./images/qr-code.png";
import Story1 from "./images/Story1.png";
import Story2 from "./images/Story2.png";
import Story3 from "./images/Story3.png";
import Story4 from "./images/Story4.png";
import Story5 from "./images/Story5.png";
import Story6 from "./images/Story6.png";
import Story7 from "./images/story7.jpg";
import Story8 from "./images/story8.jpg";
import Story9 from "./images/story9.jpg";
import Story10 from "./images/story10.jpg";
import Story11 from "./images/story11.jpg";
import Story12 from "./images/story12.jpg";
import Logo from "./images/logo.png";
import ReviewMockupLeft from "./images/ReviewMockupLeft.png";
import ReviewMockupRight from "./images/ReviewMockupRight.png";
import FeatureBg from "./images/FeatureBg.png";
import ReviewsBg from "./images/ReviewsBg.png";
import CTABg from "./images/CTABg.png";
import DownloadRight from "./images/DownloadRight.png";
import DownloadBg from "./images/DownloadBg.png";
import Feature1 from "./images/Feature1.png";
import Feature2 from "./images/Feature2.png";
import Feature3 from "./images/Feature3.png";
import Feature4 from "./images/Feature4.png";
import CardGlowBg from "./images/CardGlowBg.png";
import HeroBgImageMobile from "./images/HeroBgImageMobile.png";
import DownloadBgMobile from "./images/DownloadBgMobile.png";
import ReviewsBgMobile from "./images/ReviewsBgMobile.png";
import ExperienceBgMobile from "./images/ExperienceBgMobile.png";
import GooglePlay from "./images/GooglePlay.png";
// import AppStore from "./images/AppStore.png";

const Assets = {
  HeroBgImage,
  ExperienceBg,
  ExperienceRightMockup,
  QrCode,

  Story1,
  Story2,
  Story3,
  Story4,
  Story5,
  Story6,
  Story7,
  Story8,
  Story9,
  Story10,
  Story11,
  Story12,
  Logo,
  ReviewMockupLeft,
  ReviewMockupRight,
  FeatureBg,
  ReviewsBg,
  CTABg,
  DownloadBg,
  DownloadRight,
  Feature1,
  Feature2,
  Feature3,
  Feature4,

  CardGlowBg,
  HeroBgImageMobile,
  DownloadBgMobile,
  ReviewsBgMobile,
  ExperienceBgMobile,
  GooglePlay,
};

export default Assets;
