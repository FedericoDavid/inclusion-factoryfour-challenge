import { useState, useEffect } from "react";

import HeaderBar from "./components/HeaderBar";

import { statusKeys } from "./utils/statusKeys";
import { useFactoryFourAPIClient } from "./services/api/useFactoryFourAPIClient";

export const App: React.FC = () => {
    const [healthStatus, setHealthStatus] = useState({});

    const factoryFourAPIClient = useFactoryFourAPIClient();

    const getHealthStatusData = () => {
        statusKeys.map(async (key) => {
            try {
                const res = await factoryFourAPIClient.getHealthStatus(key);

                setHealthStatus((prev: any) => ({
                    ...prev,
                    [key]: res,
                }));
            } catch (err) {
                setHealthStatus((prev: any) => ({
                    ...prev,
                    [key]: {
                        success: false,
                        message: "error",
                        error: (err as Error).message,
                    },
                }));
            }
        });
    };

    useEffect(() => {
        getHealthStatusData();

        const interval = setInterval(() => {
            getHealthStatusData();
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    console.log(healthStatus);

    if (!healthStatus) return <p>Loading...</p>;

    return (
        <div className="App">
            <HeaderBar />
            <div>
                {Object.keys(healthStatus).map((key: string, i: number) => (
                    <p key={i}>{key}</p>
                    // <p>{healthStatus[key]}</p>
                ))}
            </div>
        </div>
    );
};

export default App;
