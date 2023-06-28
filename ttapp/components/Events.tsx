import { Box, Heading, Card, Flex, Text, Spinner } from "@chakra-ui/react"; // Assuming you are using Chakra UI
import { ethers } from "ethers";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { TRANSFER_CONTRACT_ADDRESS } from "../const/addresses";

export default function Events() {
  function truncateAddress(address: string) {
    return `${address.substring(0, 6)}...${address.substring(
      address.length - 4
    )}`;
  }

  const { contract } = useContract(TRANSFER_CONTRACT_ADDRESS);
  const { data: events, isLoading: isEventsLoading } = useContractEvents(
    contract,
    "TransactionCompleted",
    {
      queryFilter: {
        fromBlock: -7000,
      },
    }
  );

  return (
    <Box mt={20} w={"100%"}>
      <Heading>Recent Transfers:</Heading>
      {!isEventsLoading ? (
        events
          ?.map((event: any, index: number) => (
            <Card key={index} p={8} my={4}>
              <Flex flexDirection="row" alignItems="center">
                <Text
                  p={2}
                  border="1px solid grey"
                  borderRadius={6}
                  fontSize="xs"
                >
                  {truncateAddress(event.data.sender)}
                </Text>
                <Text mx={2} fontSize="sm">
                  To
                </Text>
                <Text
                  p={2}
                  border="1px solid grey"
                  borderRadius={6}
                  fontSize="xs"
                >
                  {truncateAddress(event.data.receiver)}
                </Text>
              </Flex>
              <Text fontSize="xl">{event.data.message}</Text>
              <Text>Amount: {ethers.utils.formatEther(event.data.amount)}</Text>
            </Card>
          ))
          .reverse()
      ) : (
        <Spinner />
      )}
    </Box>
  );
}
