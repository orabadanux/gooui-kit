// Font family tokens for primary and secondary typography.
export const fontFamilyTokens = {
    'primary': 'Red Hat Display',
    'secondary': 'Satoshi'
  };

// Font size tokens defined in pixels for different text elements.
export const fontSizeTokens = {
    '25': 10,
    '50': 12,
    '75': 14,
    '100': 16,
    '150': 18,
    '200': 20,
    '300': 24,
    '400': 32,
    '500': 40,
    '600': 48
  };

// Font weight tokens to represent light, regular, medium, and bold styles.
export const fontWeightTokens = {
    '50': 300, //Light
    '100': 400, //Regular
    '150': 500, //Medium
    '200': 600, //SemiBold
    '300': 700 //Bold
  };

// Line height tokens to control vertical spacing for text.
export const lineHeightTokens = {
    '100': 1.0,
    '120': 1.2,
    '150': 1.5,
    '200': 2.0,
  };

// Letter spacing tokens for additional spacing between characters.
export const letterSpacingTokens = {
    '100': 0,
    '200': 1.2
  };

// Predefined font styles for headlines, body text, and labels.
export const fontStyles = {
    // Headline styles
    'headline-lg-bold': {
      fontFamily: fontFamilyTokens.primary,
      fontSize: fontSizeTokens['600'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['300'],
    },
    'headline-md-bold': {
      fontFamily: fontFamilyTokens.primary,
      fontSize: fontSizeTokens['400'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['300'],
    },
    'headline-sm-bold': {
      fontFamily: fontFamilyTokens.primary,
      fontSize: fontSizeTokens['300'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['300'],
    },
    'headline-sm-medium': {
      fontFamily: fontFamilyTokens.primary,
      fontSize: fontSizeTokens['300'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['150'],
    },
    'headline-xs-bold': {
      fontFamily: fontFamilyTokens.primary,
      fontSize: fontSizeTokens['200'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['300'],
    },
  
    // Body styles
    'body-lg-bold': {
      fontFamily: fontFamilyTokens.secondary,
      fontSize: fontSizeTokens['150'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['300'],
    },
    'body-lg-medium': {
      fontFamily: fontFamilyTokens.secondary,
      fontSize: fontSizeTokens['150'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['150'],
    },
    'body-lg-regular': {
      fontFamily: fontFamilyTokens.secondary,
      fontSize: fontSizeTokens['150'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['100'],
    },
    'body-md-bold': {
      fontFamily: fontFamilyTokens.secondary,
      fontSize: fontSizeTokens['100'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['300'],
    },
    'body-md-medium': {
      fontFamily: fontFamilyTokens.secondary,
      fontSize: fontSizeTokens['100'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['150'],
    },
    'body-md-regular': {
      fontFamily: fontFamilyTokens.secondary,
      fontSize: fontSizeTokens['100'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['100'],
    },
    'body-sm-medium': {
      fontFamily: fontFamilyTokens.secondary,
      fontSize: fontSizeTokens['75'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['150'],
    },
    'body-sm-regular': {
      fontFamily: fontFamilyTokens.secondary,
      fontSize: fontSizeTokens['75'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['100'],
    },
  
    // Label styles
    'label-lg-medium': {
      fontFamily: fontFamilyTokens.primary,
      fontSize: fontSizeTokens['50'],
      lineHeight: lineHeightTokens['200'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['150'],
    },
    'label-lg-regular': {
      fontFamily: fontFamilyTokens.secondary,
      fontSize: fontSizeTokens['50'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['100'],
    },
    'label-md-medium': {
      fontFamily: fontFamilyTokens.secondary,
      fontSize: fontSizeTokens['25'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['150'],
    },
    'label-md-regular': {
      fontFamily: fontFamilyTokens.secondary,
      fontSize: fontSizeTokens['25'],
      lineHeight: lineHeightTokens['150'],
      letterSpacing: letterSpacingTokens['100'],
      fontWeight: fontWeightTokens['100'],
    },
  };