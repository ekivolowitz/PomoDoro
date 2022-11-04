import { useEffect } from 'react';
import { theme } from 'src/theme';
import { Heading } from '@chakra-ui/react';

export type Props = {
  goalTime: number;
  setGoalTime: (newGoal: number) => any;
};

const NUM_SECONDS_IN_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const SECONDS_IN_HOUR = NUM_SECONDS_IN_MINUTE * MINUTES_PER_HOUR;

export const Timer = ({ goalTime, setGoalTime }: Props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (goalTime > 0) {
        setGoalTime(goalTime - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const hours = Math.floor(goalTime / SECONDS_IN_HOUR);

  const minutes = Math.floor(
    (goalTime - hours * SECONDS_IN_HOUR) / MINUTES_PER_HOUR
  );

  const seconds = Math.floor(
    (goalTime - hours * SECONDS_IN_HOUR - minutes * MINUTES_PER_HOUR) %
      NUM_SECONDS_IN_MINUTE
  );

  const formattedHours = hours.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const formattedMinutes = minutes.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const formattedSeconds = seconds.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <Heading
      as="h1"
      size="4xl"
      noOfLines={1}
      pb={theme.space[2]}
      cursor="pointer"
    >
      {formattedHours}:{formattedMinutes}:{formattedSeconds}
    </Heading>
  );
};
