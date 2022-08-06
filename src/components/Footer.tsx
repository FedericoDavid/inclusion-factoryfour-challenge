import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import {
    HStack,
    Text,
    useMediaQuery,
    Icon,
    VStack,
    Link,
} from "@chakra-ui/react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const [isLargerThan980] = useMediaQuery("(min-width: 980px)");

    const renderIcon = (icon: any, url: string) => (
        <Link href={url} isExternal>
            <Icon as={icon} color="#fff" w={4} h={4} mx={2} />
        </Link>
    );

    return (
        <VStack
            width="100%"
            bgGradient="linear(to-r, blue.300, blue.700)"
            p={4}
            justifyContent="center"
            position={isLargerThan980 ? "fixed" : "relative"}
            bottom={0}
            left={0}
            right={0}
            direction="row"
        >
            <Text fontSize="md" color="#fff" fontWeight="bold">
                Enriquez Federico &copy; 2022
            </Text>
            <HStack>
                {renderIcon(
                    BsLinkedin,
                    "https://www.linkedin.com/in/federico-d-enriquez/"
                )}

                {renderIcon(BsGithub, "https://github.com/FedericoDavid")}
            </HStack>
        </VStack>
    );
};

export default Footer;
