import Head from 'next/head';

import { TimeForm } from 'src/components/TimeForm';
import { Timer } from 'src/components/Timer';

import { keyframes } from '@chakra-ui/react';

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

import { useState } from 'react';
import {
  Text,
  Box,
  Heading,
  useColorMode,
  Button,
  theme,
} from '@chakra-ui/react';

const genRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const Home = () => {
  const startColor = `#${genRandomColor()}, #${genRandomColor()}, #${genRandomColor()}, #${genRandomColor()}`;
  const [goalTime, setGoalTime] = useState<null | number>(null);
  const [randomColor, setRandomColor] = useState<null | string>(startColor);
  const { colorMode, toggleColorMode } = useColorMode();
  const handleGoalTimeClicked = (newGoal: number) => {
    setGoalTime(newGoal);
  };

  const lightColors = '#ee7752, #e73c7e, #23a6d5, #23d5ab';
  const darkColors = '#c03c13, #ab154f, #176e8d, #178d71';

  const handleTitleClick = () => {
    setRandomColor(
      `#${genRandomColor()}, #${genRandomColor()}, #${genRandomColor()}, #${genRandomColor()}`
    );
  };

  const getContent = () => {
    if (!!goalTime) {
      return <Timer goalTime={goalTime} setGoalTime={setGoalTime} />;
    }
    return (
      <Heading
        as="h1"
        size="4xl"
        noOfLines={1}
        pb={theme.space[2]}
        onClick={() => handleTitleClick()}
        cursor="pointer"
      >{`It's Pomo Time`}</Heading>
    );
  };

  return (
    <Box
      bgGradient={`linear-gradient(-45deg, ${randomColor});`}
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
        padding="4rem 0"
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {getContent()}
        {!goalTime && (
          <TimeForm handleGoalTimeClicked={handleGoalTimeClicked} />
        )}
      </Box>
    </Box>
  );
};

export default Home;
