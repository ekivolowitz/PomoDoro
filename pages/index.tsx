import Head from 'next/head';

import { TimeForm } from 'src/components/TimeForm';

import { keyframes, HStack, Divider, Image, Link } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const animation = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }

`;

// Look here for what I'm going to build: https://pomofocus.io/

import { Box, Heading, theme } from '@chakra-ui/react';

const genRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const Home = () => {
  const startColor = `#${genRandomColor()}, #${genRandomColor()}, #${genRandomColor()}, #${genRandomColor()}`;

  return (
    <Box
      bgGradient={`linear-gradient(-45deg, ${startColor});`}
      bgSize={`400% 400%`}
      animation={`${animation} 15s ease infinite`}
      padding="0 2rem"
    >
      <Head>
        <title>PomoDoro</title>
        <meta name="description" content="PomoDoro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        minHeight="100vh"
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
      >
        <HStack w="480px" h="60px">
          <Image
            src="/icon-white.png"
            w="20px"
            alt="checkmark"
            fontWeight="bold"
            fontSize="20px"
          />
          <Link
            ml={theme.space[1]}
            color={theme.colors.white}
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            fontWeight="bold"
            fontSize="20px"
            marginInlineStart="none"
            mr="5px"
          >
            {`Pomofocus`}
          </Link>
        </HStack>
        <Box bgColor="rgba(0,0,0,0.1)" height="1px" w="480px" />
        <TimeForm />
      </Box>
    </Box>
  );
};

export default Home;
