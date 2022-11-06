import { extendTheme } from '@chakra-ui/react';

const colors = {
  black: '#111',
  white: '#FFF',
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const space = {
  0.5: '0.5rem',
  1: '1rem',
  2: '2rem',
  3: '3rem',
  10: '10rem',
};

const width = {
  full: '480px',
};

export const theme = extendTheme({
  fonts: {
    heading: `'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    body: `'ArialRounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  },
  styles: {
    global: (props: any) => ({
      'html, body': {
        padding: 0,
        margin: 0,
        color: props.colorMode === 'dark' ? colors.white : colors.black,
        background: props.colorMode === 'dark' ? colors.black : colors.white,
        lineHeight: 'tall',
      },
      a: {
        color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
        textDecoration: null,
      },
      '*': {
        boxSizing: 'border-box',
      },
    }),
  },
  ...config,
  ...colors,
  space,
  width,
});
