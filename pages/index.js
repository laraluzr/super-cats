import { Container, SimpleGrid } from "@chakra-ui/layout";
import Card from "../components/Card/Card";
import { globalStats } from "../lib/settings";

const getRandomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - 1));

const Home = ({ cats }) => {
  return (
    <Container>
      <SimpleGrid columns={1} gap={4}>
        {cats.map(({ name, photo }) => {
          return (
            <Card
              name={name}
              imageUrl={photo.urls.regular}
              stats={Object.fromEntries(
                globalStats.map((globalStat) => [
                  globalStat.key,
                  getRandomBetween(globalStat.min, globalStat.max),
                ])
              )}
            />
          );
        })}
      </SimpleGrid>
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
  const cats = photos.map((photo, index) => ({ photo, name: names[index] }));

  return { props: { cats } };
};

export default Home;
