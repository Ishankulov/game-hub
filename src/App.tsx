import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav"
          "aside"
        "main"`,
          lg: `"nav nav"
        "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem pl="2" area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem pl="2" area={"aside"} paddingX={5}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem pl="2" area={"main"}>
          <PlatformSelector
            selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
