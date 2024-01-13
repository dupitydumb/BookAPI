import { useState } from "react";
import React from "react";
import {
  Text,
  Image,
  Stack,
  Heading,
  Button,
  Tag,
  ButtonGroup,
  Divider,
  Center,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  TagLeftIcon,
  TagLabel,
  Skeleton,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { ChakraProvider, IconButton, Grid, GridItem } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { get } from "http";

function SliceDescription(descriptions: string) {
  if (descriptions.length > 30) {
    return descriptions.slice(0, 30) + "...";
  } else {
    return descriptions;
  }
}

function CardResult({
  title,
  description,
  image,
  genre,
}: {
  title: string;
  description: string;
  image: string;
  genre: string;
}) {
  function GetLinkImage(image: string) {
    if (image === undefined) {
      return "https://via.placeholder.com/150";
    } else {
      setIsLoading(true);
      return "https://covers.openlibrary.org/b/id/" + image + "-M.jpg";
    }
  }

  function SetGenre(genre: string) {
    if (genre === undefined) {
      return "No Genre";
    }
    return genre;
  }

  const [isLoading, setIsLoading] = useState(false);
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      height={200}
      shadow={"md"}
      width="100%"
      maxWidth={450}
      minWidth={300}
    >
      {isLoading ? (
        <Skeleton height="100%" width={150} />
      ) : (
        <Image
          objectFit="cover"
          height="100%"
          src={GetLinkImage(image)}
          maxWidth={150}
          onLoad={() => {
            setIsLoading(false);
          }}
        />
      )}

      <Stack>
        <CardBody>
          <Heading size="md" textAlign={"left"}>
            {SliceDescription(title)}
          </Heading>
          <Text py="2" textAlign={"left"}>
            {SliceDescription(description)}
          </Text>
        </CardBody>
        <CardFooter>
          <Button
            colorScheme="blue"
            variant="outline"
            size="sm"
            onClick={() => {
              window.open("https://openlibrary.org/search?q=" + title);
            }}
          >
            More Info
          </Button>
          <Tag size={"sm"} variant={"subtle"} colorScheme="blue">
            <TagLeftIcon boxSize="12px" as={AddIcon} />
            <TagLabel>{SetGenre(genre)}</TagLabel>
          </Tag>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default CardResult;
