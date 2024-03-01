import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" bg="gray.200" mt={10} py={2}>
      <Container centerContent>
        <Text fontSize="sm">&copy; {new Date().getFullYear()} Todo App. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;
