import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";

const App = () => {
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
      >
        <GridItem pl="2" area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem pl="2" area={"aside"}>
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem pl="2" area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
