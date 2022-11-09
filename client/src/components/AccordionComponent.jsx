import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

function AccordionComponent({ heading, subHeading, summary }) {
  return (
    <Box>
      <Box>
        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Text fontSize={"20px"} as="b">
                        {heading}
                      </Text>
                    </Box>
                    {isExpanded ? "-" : "+"}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text mt={5} mb={5}>
                    {subHeading}
                  </Text>
                  <Text>{summary}</Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}

export default AccordionComponent;
