import * as React from 'react';
import { useState } from 'react';
import { theme } from 'src/theme';
import { Timer } from 'src/components/Timer';

import { VStack, Button, Flex, Box, HStack, Heading } from '@chakra-ui/react';

enum BUTTON_STATES {
  POMODORO = 1,
  SHORT_BREAK,
  LONG_BREAK,
}

enum BUTTON_STATE_TIMES {
  POMODORO = 1500,
  SHORT_BREAK = 300,
  LONG_BREAK = 900,
}

export type RowButtonProps = {
  children: React.ReactNode;
  buttonIndex: BUTTON_STATES;
  selectedButtonIndex: BUTTON_STATES;
  setSelectedButtonIndex: (buttonIndex: BUTTON_STATES) => void;
  setCurrTime: (time: number) => void;
};

export const RowButton = ({
  children,
  buttonIndex,
  selectedButtonIndex,
  setSelectedButtonIndex,
  setCurrTime,
}: RowButtonProps) => {
  const handleClick = () => {
    let buttonTime = 0;
    switch (buttonIndex) {
      case BUTTON_STATES.POMODORO:
        buttonTime = BUTTON_STATE_TIMES.POMODORO;
        break;
      case BUTTON_STATES.SHORT_BREAK:
        buttonTime = BUTTON_STATE_TIMES.SHORT_BREAK;
        break;
      case BUTTON_STATES.LONG_BREAK:
        buttonTime = BUTTON_STATE_TIMES.LONG_BREAK;
        break;
      default:
        buttonTime = BUTTON_STATE_TIMES.POMODORO;
    }

    setSelectedButtonIndex(buttonIndex);
    setCurrTime(buttonTime);
  };

  return (
    <Button
      bg={buttonIndex === selectedButtonIndex ? theme.colors.white : 'none'}
      h="20px"
      m="0"
      marginInlineStart="0"
      _hover={{}}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export type Props = {};

export const TimeForm = () => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number>(
    BUTTON_STATES.POMODORO
  );

  const [currTime, setCurrTime] = useState<number>(BUTTON_STATE_TIMES.POMODORO);

  return (
    <Flex align="center" justify="center">
      <Box rounded="md" bgColor={'#ffffff55'} margin={theme.space[6]}>
        <VStack padding={theme.space[6]} spacing={4} align="center" w="480px">
          <HStack>
            <RowButton
              buttonIndex={BUTTON_STATES.POMODORO}
              selectedButtonIndex={selectedButtonIndex}
              setSelectedButtonIndex={setSelectedButtonIndex}
              setCurrTime={setCurrTime}
            >
              Pomodoro
            </RowButton>
            <RowButton
              buttonIndex={BUTTON_STATES.SHORT_BREAK}
              selectedButtonIndex={selectedButtonIndex}
              setSelectedButtonIndex={setSelectedButtonIndex}
              setCurrTime={setCurrTime}
            >
              Short Break
            </RowButton>
            <RowButton
              buttonIndex={BUTTON_STATES.LONG_BREAK}
              selectedButtonIndex={selectedButtonIndex}
              setSelectedButtonIndex={setSelectedButtonIndex}
              setCurrTime={setCurrTime}
            >
              Long Break
            </RowButton>
          </HStack>
          <Timer goalTime={currTime} setGoalTime={setCurrTime} />
        </VStack>
      </Box>
    </Flex>
  );
};
