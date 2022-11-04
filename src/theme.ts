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

export const theme = extendTheme({
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    body: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
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
});
