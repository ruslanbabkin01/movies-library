export const theme = Object.freeze({
  colors: {
    accent: '#2196F3',
    white: '#ffffff',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
    ocean: '#008B8B',
    black: '#000',
    text: '#2a2a2a',
    primary: '#07c',
    secondary: '#05a',
    muted: '#f6f6f6',
    mainBackground: ['linear-gradient(to bottom, #c9d6ff,  #e2e2e2)'],
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  spacing: value => `${4 * value}px`,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
});
