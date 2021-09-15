import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import {sizeWidth,sizeFont} from '../../src/util/size'

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    navTitle: sizeFont(25),
    h1: sizeFont(7),
    h2: sizeFont(6),
    h3: sizeFont(5),
    h4: sizeFont(4),
    h5: sizeFont(3),
    body1: sizeFont(5),
    body2: sizeFont(4),
    body3: sizeFont(3),
    body4: sizeFont(2),
    body5: sizeFont(1),

    // app dimensions
    width,
    height
};

export const FONTS = {
    navTitle: { fontFamily: "Gotham-Light", fontSize: SIZES.navTitle },
    largeTitleBold: { fontFamily: "Gotham-Bold", fontSize: SIZES.h2 },
    h1: { fontFamily: "Gotham-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Gotham-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Gotham-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Gotham-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Gotham-Bold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Gotham-Medium", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Gotham-Medium", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Gotham-Medium", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Gotham-Medium", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Gotham-Medium", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = {SIZES, FONTS };

export default appTheme;