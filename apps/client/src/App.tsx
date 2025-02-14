import { useEffect } from "react";
import { useParams } from "react-router";
import {
  Card,
  Flex,
  Skeleton,
  Avatar,
  Stack,
  Button,
  CardBody,
  Text,
  Heading,
  Image,
  HStack,
  Box,
  Center,
  VStack,
  Tag,
} from "@chakra-ui/react";

import { useNextDeliveryMessage } from "./App.hooks";

function App() {
  const {
    fetchNextDeliveryMessage,
    nextDeliveryMessage,
    isLoading,
    errorMessage,
  } = useNextDeliveryMessage();

  const { id } = useParams();

  useEffect(() => {
    if (id) fetchNextDeliveryMessage(id);
  }, [fetchNextDeliveryMessage, id]);

  if (errorMessage) {
    return (
      <Center bg="white" h="100vh" w="100vw">
        {errorMessage}
      </Center>
    );
  }

  return (
    <Center bg="white" h="100vh" w="100vw">
      <Card as={isLoading ? Skeleton : Card}>
        <CardBody p={[5, 5, 0, 0]} position="relative">
          {nextDeliveryMessage.freeGift && (
            <Box
              position={"absolute"}
              top={["100%", "100%", 0, 0]}
              right={0}
              left={[0, 0, "auto", "auto"]}
              margin="auto"
              width="fit-content"
              transform={[
                "translate(-10px, -10px)",
                "translate(-10px, -10px)",
                "translate(15px, -10px)",
                "translate(15px, -10px)",
              ]}
            >
              <Tag transform={"rotate(10deg)"} color="green">
                Free Gift
              </Tag>
            </Box>
          )}
          <Stack
            direction={["column", "column", "row", "row"]}
            alignItems="center"
          >
            <Flex flexShrink={0}>
              <Image
                src="https://placecats.com/neo_2/400/250"
                alt="Placeholder"
                w="100%"
                maxW="400px"
                display={["none", "none", "block", "block"]}
              />
              <Avatar
                name="Dan Abrahmov"
                src="https://placecats.com/neo_2/400/250"
                display={["block", "block", "none", "none"]}
                margin="0 auto"
                width={"60px"}
                height={"60px"}
                transform={"translateY(-40px)"}
              />
            </Flex>
            <Flex flexGrow={1}>
              <VStack
                px={4}
                py={2}
                align="flex-start"
                textAlign={["center", "center", "left", "left"]}
              >
                <Heading width="100%" size="md">
                  {nextDeliveryMessage.title}
                </Heading>
                <Text>{nextDeliveryMessage.message}</Text>
                <Text width="100%" fontWeight="bold">
                  Total Price: ${nextDeliveryMessage.totalPrice}
                </Text>
                <Box width="100%">
                  <HStack
                    pt={4}
                    justifyContent={[
                      "center",
                      "center",
                      "flex-start",
                      "flex-start",
                    ]}
                  >
                    <Button variant="solid">See details</Button>
                    <Button variant="outline">Edit Delivery</Button>
                  </HStack>
                </Box>
              </VStack>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
}

export default App;
