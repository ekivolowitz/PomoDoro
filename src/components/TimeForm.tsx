import * as React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import { theme } from 'src/theme';
import * as yup from 'yup';

import {
  VStack,
  useColorMode,
  Button,
  Flex,
  Box,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
} from '@chakra-ui/react';

interface TimeFormProps {
  goalTime: number;
}

export type Props = {
  handleGoalTimeClicked: (newGoal: number) => any;
};

const validationSchema = yup.object({
  goalTime: yup.number().required('Goal Time is required'),
});

export const TimeForm = ({ handleGoalTimeClicked }: Props) => {
  const initialValues: TimeFormProps = { goalTime: 0 };
  const { colorMode } = useColorMode();
  const [currCount, setCurrCount] = useState<number>(0);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (_) => {
      handleGoalTimeClicked(currCount);
    },
  });

  return (
    <Flex align="center" justify="center">
      <Box p={6} rounded="md" bgColor={'#ffffff55'} padding={theme.space[6]}>
        <form onSubmit={formik.handleSubmit}>
          <VStack padding={theme.space[6]} spacing={4} align="flex-start">
            <FormControl>
              <HStack>
                <FormLabel
                  htmlFor="goalTime"
                  color={
                    colorMode === 'dark'
                      ? theme.colors.white
                      : theme.colors.black
                  }
                  mr={theme.space[1]}
                  mb={0}
                >
                  Goal Time
                </FormLabel>
                <NumberInput
                  step={1}
                  min={0}
                  bg={theme.colors.white}
                  color={theme.colors.black}
                  borderColor={colorMode === 'dark' ? theme.colors.black : null}
                  onChange={(_, numValue) => setCurrCount(numValue)}
                >
                  <NumberInputField
                    _hover={{
                      borderColor:
                        colorMode === 'dark' ? theme.colors.black : null,
                    }}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper color={theme.colors.black} />
                    <NumberDecrementStepper color={theme.colors.black} />
                  </NumberInputStepper>
                </NumberInput>
              </HStack>
            </FormControl>
            <Button
              color={
                colorMode === 'dark' ? theme.colors.white : theme.colors.black
              }
              type="submit"
              colorScheme="black"
              width="full"
            >
              Start timing
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};
