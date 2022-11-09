import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Subcategory({ heading, summary }) {
  return (
    <Box mt={5} ml={10} display={"flex"}>
      <Box>
        <Text as="b">{heading}</Text>
      </Box>
      <Box ml={1}>
        <Text>{summary}</Text>
      </Box>
    </Box>
  );
}

export default Subcategory;
