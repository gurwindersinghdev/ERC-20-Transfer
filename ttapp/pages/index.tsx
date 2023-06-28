import {
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { MediaRenderer } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import FeatureCard from "../components/FeatureCard";
import Events from "../components/Events";
import { HERO_IMAGE_URL, TRANSACTIONS } from "../const/addresses";

const Home: NextPage = () => {
  return (
    <Container maxW={"1440px"} py={4}>
      <Flex flexDirection={"row"} h={"75vh"}>
        <Flex flexDirection={"column"} justifyContent={"center"} w={"60%"}>
          <Stack spacing={4}>
            <Heading fontSize={"xl"}>Execute a token transfer.</Heading>
            <Heading fontSize={"6xl"}>
              Distribute tokens to your loved ones and family members
            </Heading>
            <Text fontSize={"xl"}>
              Choose from a range of tokens to share with your loved ones and
              acquaintances.
            </Text>
            <Link href={"/transfer"}>
              <Button>Initiate a transaction.</Button>
            </Link>
          </Stack>
        </Flex>
        <Box>
          <MediaRenderer src={HERO_IMAGE_URL} height="100%" width="100%" />
        </Box>
      </Flex>
      <SimpleGrid columns={3} spacing={4} mt={4}>
        <Box>
          <MediaRenderer src={TRANSACTIONS} height="100" width="80%" />
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack spacing={4}>
              <FeatureCard
                step={"01"}
                title={"Select a Token"}
                description={"Select from a list of verified token"}
              />
              <FeatureCard
                step={"02"}
                title={"Whom to Send to"}
                description={"Select from a list of verified token"}
              />
              <FeatureCard
                step={"03"}
                title={"Write a Message"}
                description={"Select from a list of verified token"}
              />
            </Stack>
          </Flex>
        </Box>
      </SimpleGrid>
      <Events />
    </Container>
  );
};
export default Home;
