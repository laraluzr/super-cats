import { Box, Grid, Text, Stack, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { globalStats } from "../../lib/settings";
const Card = ({ name, imageUrl, stats }) => {
  return (
    <Grid backgroundColor="blue" borderRadius="40px" overflow="hidden">
      <Box
        gridColumn="1/2"
        gridRow="1/2"
        width="100%"
        pb="158%"
        position="relative"
      >
        <Image layout="fill" objectFit="cover" unoptimized src={imageUrl} />
      </Box>
      <Stack gridColumn="1/2" gridRow="1/2" zIndex={2}>
        <Box
          p={8}
          background="linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)) "
          textColor="white"
          fontSize="xl"
        >
          <Text>{name}</Text>
        </Box>
        <Stack flexGrow="1" justifyContent="flex-end">
          <Box background="linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)80%) ">
            {globalStats.map((globalStat) => (
              <Stat
                label={globalStat.label}
                value={stats[globalStat.key]}
                unit={globalStat.unit}
                isTrump={stats[globalStat.key] === globalStat.max}
              />
            ))}
          </Box>
        </Stack>
      </Stack>
    </Grid>
  );
};

const Stat = ({ label, value, unit, isTrump }) => {
  return (
    <Box
      px={4}
      sx={{ "--borderBottom": "1px solid" }}
      _last={{ pb: "4", "--borderBottom": "0px solid" }}
    >
      <HStack
        borderBottom="var(--borderBottom)"
        borderColor="rgba(255,255,255, .5)"
        justifyContent="space-between"
        p={4}
        fontSize="lg"
        color={isTrump ? "red" : "white"}
      >
        <Text>{label}</Text>
        <Text>
          {value} {unit}
        </Text>
      </HStack>
    </Box>
  );
};
export default Card;
