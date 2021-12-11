import { Box, Grid, Text, Stack, HStack, styled } from "@chakra-ui/react";
import Image from "next/image";
import { globalStats } from "../../lib/settings";

const Face = styled(Grid, {
  baseStyle: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: "30px",
    overflow: "hidden",
    backfaceVisibility: "hidden",
    transition: "transform .4s ease-out",
  },
});

const Card = ({ name, imageUrl, stats, isBackface }) => {
  return (
    <Box pb="158%" position="relative">
      <Face
        bgColor="orange"
        boxShadow="inset 0 0 0 15px var(--chakra-colors-pink)"
        bgImage="url(/catpaw.svg)"
        bgSize="20%"
        bgPosition="center"
        transform={!isBackface ? "rotateY(180deg)" : "rotateY(0)"}
      />
      <Face transform={isBackface ? "rotateY(180deg)" : "rotateY(0)"}>
        <Box
          gridColumn="1/2"
          gridRow="1/2"
          height="100%"
          width="100%"
          position="relative"
        >
          <Image
            layout="fill"
            objectFit="cover"
            alt={`photo of ${name}`}
            unoptimized
            src={imageUrl}
          />
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
                  key={globalStat.label}
                  label={globalStat.label}
                  value={stats[globalStat.key]}
                  unit={globalStat.unit}
                  isTrump={stats[globalStat.key] === globalStat.max}
                />
              ))}
            </Box>
          </Stack>
        </Stack>
      </Face>
    </Box>
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
