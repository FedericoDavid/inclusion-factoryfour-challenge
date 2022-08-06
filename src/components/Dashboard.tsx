import React from "react";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

export interface DashboardProps {
    healthStatus: any;
}

const Dashboard: React.FC<DashboardProps> = ({ healthStatus }) => (
    <SimpleGrid
        columns={[1, 2, 4, 6]}
        gap={7}
        marginTop={12}
        marginBottom={12}
        mx="60px"
    >
        {Object.keys(healthStatus)
            .sort()
            .map((item, i) => (
                <GridItem
                    key={i}
                    w="100%"
                    h="100%"
                    bg="blue.50"
                    boxShadow="2xl"
                    rounded={15}
                >
                    <Card name={item} status={healthStatus[item]} />
                </GridItem>
            ))}
    </SimpleGrid>
);

export default Dashboard;
