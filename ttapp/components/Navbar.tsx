import { Container, Flex, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Navbar() {
  const address = useAddress();

  return (
    <Container maxW={"1770px"} py={2}>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link href={"/"}>
          <Text fontWeight={"bold"}>Execute a token</Text>
        </Link>
        {address && (
          <Flex flexDirection={"row"}>
            <Link href={"/transfer"}>
              <Text mr={10}>Transfer</Text>
            </Link>
            <Link href={"/claim"}>
              <Text mr={10}>Claim</Text>
            </Link>
            <Link href={`/profile/${address}`}>
              <Text>My Account</Text>
            </Link>
          </Flex>
        )}

        <ConnectWallet />
      </Flex>
    </Container>
  );
}
