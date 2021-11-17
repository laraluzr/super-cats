import { Container, Heading, SimpleGrid, Box } from "@chakra-ui/react";

import Image from "next/image";
import AnimatedHeading from "../AnimatedHeading";

const Hero = (props) => {
  return (
    <Container maxW="container.lg" py="16">
      <Heading
        size="xs"
        textAlign="center"
        pb="4"
        textTransform="uppercase"
        letterSpacing=".2em"
        color="gray.400"
      >
        Welcome to willow
      </Heading>
      <AnimatedHeading size="3xl" textAlign="center" color="gray.800">
        {props.heading}
      </AnimatedHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} py={8}>
        <Box position="relative" height="60vh">
          <Image
            src="http://placekitten.com/200/300"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 25%"
          />
        </Box>
        <Box position="relative" height="60vh">
          <Image
            src="http://placekitten.com/400/600"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 25%"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};
export default Hero;
