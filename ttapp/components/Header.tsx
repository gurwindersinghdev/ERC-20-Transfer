import { Button, useColorMode } from "@chakra-ui/react";

const Example: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      {colorMode !== "dark" && (
        <Button
          onClick={toggleColorMode}
          colorScheme="teal"
          variant="solid"
          size="md"
        >
          Toggle Dark
        </Button>
      )}
    </header>
  );
};

export default Example;
