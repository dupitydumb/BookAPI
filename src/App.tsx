import React from "react";
import { useState } from "react";
import {
  Text,
  Image,
  Stack,
  Heading,
  Button,
  ButtonGroup,
  Divider,
  Center,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Hide,
} from "@chakra-ui/react";
import logo from "./logo.svg";

import "./App.css";

import { ChakraProvider, IconButton, Grid, GridItem } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import CardResult from "./CardResult";

/* Get Data from API */

function App() {
  const [Search, setSearch] = useState("");
  const handleSearch = (event: any) => setSearch(event.target.value);
  const [BookData, setBookData] = useState([]);

  function RewriteSearch(search: string) {
    /* Replace spaces with + */
    return search.replace(" ", "+");
  }

  async function GetData() {
    const query = RewriteSearch(Search);
    try {
      const response = await fetch(
        "https://openlibrary.org/search.json?q=" +
          query.toString() +
          "&limit=20"
      );
      const data = await response.json();
      setBookData(data.docs);
    } catch (error) {
      console.error(error);
    }

    /* Debugging */
    console.log(BookData);
  }

  /* Parse Data */

  return (
    <body>
      <ChakraProvider>
        <div className="App">
          <Heading>
            <Center bg="tomato" h="100px" color="white">
              Book API
            </Center>
          </Heading>

          <div className="flex flex-row">
            <div className="basis-1/6"></div>
            <div className="Middle">
              <div className="SearchSection">
                <Center>
                  <div className="SearchBar">
                    <InputGroup width="100%">
                      <Input
                        onChange={handleSearch}
                        className="Bar"
                        variant="outline"
                        placeholder="Search for books"
                      />
                      <InputRightElement width={"auto"}>
                        <Button onClick={GetData} colorScheme="blue">
                          Search
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </div>
                </Center>
              </div>
              <div className="SearchResults">
                <Grid templateColumns="repeat(3, 5fr)" gap={2} marginTop={10}>
                  {BookData.map((book: any) => (
                    <li key={book.key}>
                      <CardResult
                        title={book.title}
                        description={book.author_name[0]}
                        image={book.cover_i}
                      />
                    </li>
                  ))}
                </Grid>
              </div>
            </div>
            <div className="basis-1/6"></div>
          </div>
        </div>
      </ChakraProvider>
    </body>
  );
}

export default App;
function then(arg0: (data: any) => void) {
  throw new Error("Function not implemented.");
}
