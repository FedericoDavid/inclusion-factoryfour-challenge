import React from "react";
import { Text, Center, Badge, Box } from "@chakra-ui/react";

import { Status } from "../services/types";
import moment from "moment";

interface CardProps {
    name: string;
    status: Status;
}

const Card: React.FC<CardProps> = ({ name, status }) => {
    const { message, hostname, success, time, error } = status;

    const capitalizeFirstLetter = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1);

    const DisplayErrorMessage = () => (
        <>
            <Text fontSize="xl" color="red.500" fontWeight="bold">
                Expired
            </Text>
            <Text fontSize="lg" color="red.500">
                {error}
            </Text>
        </>
    );

    return (
        <Center w="100%" h="160px">
            <Box textAlign="center" w="100%">
                <Text fontSize="2xl" fontWeight="bold" my={1}>
                    {capitalizeFirstLetter(name)}
                </Text>
                <Badge
                    variant="solid"
                    colorScheme={success ? "green" : "red"}
                    width="10em"
                    my={1}
                >
                    {message.split(" ")[0]}
                </Badge>
                {success ? (
                    <Text mt={2}>
                        {hostname && capitalizeFirstLetter(hostname)}
                    </Text>
                ) : (
                    <DisplayErrorMessage />
                )}
                {success && (
                    <Text my={1}>{moment(time).format("HH:mm:ss")}</Text>
                )}
            </Box>
        </Center>
    );
};

export default Card;
