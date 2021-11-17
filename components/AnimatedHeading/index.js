import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AnimatedHeading = motion(Heading);
AnimatedHeading.defaultProps = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default AnimatedHeading;
