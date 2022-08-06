import { useState, useEffect, useCallback } from "react";

import HeaderBar from "./components/HeaderBar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

import { statusKeys } from "./utils/statusKeys";
import { useFactoryFourAPIClient } from "./services/api/useFactoryFourAPIClient";

export const App: React.FC = () => {
    const [healthStatus, setHealthStatus] = useState({});

    const factoryFourAPIClient = useFactoryFourAPIClient();

    const getHealthStatusData = useCallback(async () => {
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
    }, []);

    useEffect(() => {
        getHealthStatusData();

        const interval = setInterval(() => {
            getHealthStatusData();
        }, 15000);

        return () => clearInterval(interval);
    }, [getHealthStatusData]);

    return (
        <div className="App">
            <HeaderBar />
            <Dashboard healthStatus={healthStatus} />
            <Footer />
        </div>
    );
};

export default App;
