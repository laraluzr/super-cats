import { Container, SimpleGrid, Box } from "@chakra-ui/layout";
import { useState } from "react";
import Card from "../components/Card/Card";
import { globalStats } from "../lib/settings";

const getRandomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - 1));

const Home = ({ cats }) => {
  const [deck, setDeck] = useState(cats);
  const [playerHand, setPlayerHand] = useState([]);

  const drawCard = () => {
    const [cardToDraw, ...rest] = deck.reverse();
    setPlayerHand([cardToDraw, ...playerHand]);
    setDeck(rest.reverse());
  };
  return (
    <Container sx={{ perspective: "900px" }}>
      <Box sx={{ transformStyle: "preserve-3d" }} transform="rotateX(45deg)">
        <SimpleGrid
          onClick={drawCard}
          columns={1}
          width="300px"
          margin="auto"
          gap={4}
        >
          {deck.map(({ name, photo, stats }, index) => {
            return (
              <Box
                sx={{ transformStyle: "preserve-3d" }}
                key={name + photo.urls.regular}
                gridRow={1}
                gridColumn={1}
                transform={`translateZ(${index * 2}px) `}
              >
                <Card
                  isBackface={true}
                  name={name}
                  imageUrl={photo.urls.regular}
                  stats={stats}
                />
              </Box>
            );
          })}
        </SimpleGrid>
        <SimpleGrid width="300px" margin="auto" transform="rotateX(-45deg)">
          {playerHand.map(({ name, photo, stats }, index) => {
            return (
              <Box
                sx={{ transformStyle: "preserve-3d" }}
                key={name + photo.urls.regular}
                gridRow={1}
                gridColumn={1}
                transform={`translateZ(${index * 2}px) `}
              >
                <Card
                  isBackface={false}
                  name={name}
                  imageUrl={photo.urls.regular}
                  stats={stats}
                />
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export const getStaticProps = async () => {
  const names = await fetch(
    "https://randommer.io/api/Name?nameType=firstname&quantity=30",
    { headers: { "X-Api-Key": "904cd3512711463690e4b076ef2450a8" } }
  ).then((res) => res.json());
  const photos = await fetch(
    "https://api.unsplash.com/photos/random?query=cat&count=30&client_id=O-e3XENkRmigpIoG56NB6HC6M1JU2kGCn1SKNnsR-7I"
  ).then((res) => res.json());
  const cats = photos.map((photo, index) => ({
    photo,
    name: names[index],
    stats: Object.fromEntries(
      globalStats.map((globalStat) => [
        globalStat.key,
        getRandomBetween(globalStat.min, globalStat.max),
      ])
    ),
  }));

  return { props: { cats } };
};

export default Home;
