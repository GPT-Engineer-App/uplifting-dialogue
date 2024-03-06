import React, { useState } from "react";
import { Box, Button, Container, Text, VStack, Heading, Image, useToast } from "@chakra-ui/react";
import { FaSmileBeam, FaQuoteRight } from "react-icons/fa";

const motivationalQuotes = ["Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", "Keep your face always toward the sunshine—and shadows will fall behind you.", "Believe you can and you're halfway there.", "You are braver than you believe, stronger than you seem, and smarter than you think.", "Your potential is endless.", "Positive anything is better than negative nothing.", "You get what you give.", "Do not wait for the opportunity. Create it."];

const Index = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const toast = useToast();

  const handleClick = () => {
    const nextIndex = (quoteIndex + 1) % motivationalQuotes.length;
    setQuoteIndex(nextIndex);
    toast({
      title: "Encouragement!",
      description: "Here's a new quote to brighten your day!",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" centerContent py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" textAlign="center">
            Uplift
          </Heading>
          <Text mt={4} textAlign="center">
            Your personal space for comfort, encouragement, and motivation.
          </Text>
        </Box>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1566022357960-7cc01956a37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21mb3J0aW5nJTIwc2NlbmVyeXxlbnwwfHx8fDE3MDk2ODk1MzN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Comforting Scenery" />
        <VStack spacing={4}>
          <Box textAlign="center">
            <Text fontSize="xl" fontStyle="italic">
              "{motivationalQuotes[quoteIndex]}"
            </Text>
            <FaQuoteRight />
          </Box>
          <Button leftIcon={<FaSmileBeam />} colorScheme="teal" variant="solid" onClick={handleClick}>
            Inspire Me
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
