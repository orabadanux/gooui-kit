import React, { ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { colors, fontStyles, borderWidth, borderRadius, opacity, strokeSizes, sizes } from '../tokens';

const theme = {
  colors,
  fontStyles,
  borderWidth,
  borderRadius,
  opacity,
  sizes,
  strokeSizes
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

// Extend Emotion's Theme type (optional, for type safety)
declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    fontStyles: typeof fontStyles;
    borderWidth: typeof borderWidth;
    borderRadius: typeof borderRadius;
    opacity: typeof opacity;
    sizes: typeof sizes;
    strokeSizes: typeof strokeSizes;
  }
}