import { Grid, GridItem } from "@chakra-ui/react";
const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header"
          "nav"
        "main"
        "footer"`,
          lg: `"header header"
        "nav main"
        "nav footer"`,
        }}
       
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Header
        </GridItem>
        <GridItem pl="2" bg="red.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
