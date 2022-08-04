import React from "react";

import { HStack, Text } from "@chakra-ui/react";

interface HeaderBarProps {}

const HeaderBar: React.FC<HeaderBarProps> = () => (
   <HStack
      width="100%"
      bgGradient="linear(to-r, blue.300, blue.700)"
      padding={5}
   >
      <Text
         fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
         color="#fff"
         fontWeight="bold"
      >
         FactoryFour Status Dashboard
      </Text>
   </HStack>
);

export default HeaderBar;
