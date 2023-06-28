import React from "react";
import { useAddress, useContractRead, useContract } from "@thirdweb-dev/react";
import { Container, Flex, Avatar, Text, Spinner } from "@chakra-ui/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../../const/addresses";
import BalanceCard from "../../components/BalanceCard"; // Import the BalanceCard component

export default function ProfilePage() {
  const address = useAddress();

  function truncateAddress(address: string) {
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  }

  const { contract: transferContract } = useContract(TRANSFER_CONTRACT_ADDRESS);

  const { data: verifiedTokens, isLoading: isVerifiedTokensLoading } =
    useContractRead(transferContract, "getVerifiedTokens");

  return (
    <Container maxW="1440px" py={4}>
      {address ? (
        <Flex>
          <Flex flexDirection="column" mr={8} p={10}>
            <Avatar size="2xl" mr={4} />
            <Text
              fontSize="sm"
              border="1px solid black"
              textAlign="center"
              borderRadius={4}
            >
              {truncateAddress(address)}
            </Text>
          </Flex>
          {!isVerifiedTokensLoading ? (
            verifiedTokens.map((tokenAddress: string) => (
              <BalanceCard key={tokenAddress} tokenAddress={tokenAddress} />
            ))
          ) : (
            <Spinner />
          )}
        </Flex>
      ) : (
        <Text>Please connect your wallet</Text>
      )}
    </Container>
  );
}
