import { Button, useColorMode } from "@chakra-ui/react";

const Example: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      {colorMode !== "light" && (
        <Button
          onClick={toggleColorMode}
          colorScheme="teal"
          variant="solid"
          size="md"
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      )}
    </header>
  );
};

export default Example;
