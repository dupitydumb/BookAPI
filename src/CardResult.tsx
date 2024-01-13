import React from "react";
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
} from "@chakra-ui/react";
import { ChakraProvider, IconButton, Grid, GridItem } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

function SliceDescription(descriptions: string) {
  return descriptions.slice(0, 30) + "";
}

function CardResult({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  const imglink = "https://covers.openlibrary.org/b/id/" + image + "-M.jpg";
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      height={220}
      shadow={"md"}
    >
      <Image
        objectFit="cover"
        width={150}
        height="100%"
        src={imglink}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md" textAlign={"left"}>
            {title}
          </Heading>
          <Text py="2" textAlign={"left"} maxWidth="100%" maxHeight="100%">
            {SliceDescription(description)}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default CardResult;
