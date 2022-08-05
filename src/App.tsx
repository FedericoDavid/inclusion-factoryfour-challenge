import { useState, useEffect } from "react";
import axios from "axios";

import HeaderBar from "./components/HeaderBar";

import { queryExceptions, statusKeys } from "./utils/statusData";

export const App: React.FC = () => {
    const [healthStatus, setHealthStatus] = useState({});

    const baseUrl = (queryString: string) =>
        `https://api.factoryfour.com/${queryString}/health/status`;

    const handleCorsUrl = (queryString: string) =>
        `https://cors-anywhere.herokuapp.com/${baseUrl(queryString)}`;

    const handleBaseUrl = (queryString: string) => {
        const { users, invites, messages } = queryExceptions;
        if (
            //this three always return "rejected by cors policy", using "cors-anywhere" to solve it
            queryString === users ||
            queryString === messages ||
            queryString === invites
        ) {
            return handleCorsUrl(queryString);
        } else {
            return baseUrl(queryString);
        }
    };

    const getHealthStatusData = () => {
        statusKeys.map((queryKey) =>
            axios
                .get(handleBaseUrl(queryKey))
                .then((res) =>
                    setHealthStatus((prev: any) => ({
                        ...prev,
                        [queryKey]: res.data,
                    }))
                )
                .catch((err) =>
                    setHealthStatus((prev: any) => ({
                        ...prev,
                        [queryKey]: {
                            success: false,
                            message: "error",
                            error: err.response,
                        },
                    }))
                )
        );
    };

    useEffect(() => {
        getHealthStatusData();

        const interval = setInterval(() => {
            getHealthStatusData();
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    console.log(healthStatus);

    if (!healthStatus) return <p>no</p>;

    return (
        <div className="App">
            <HeaderBar />
            <div>
                {Object.keys(healthStatus).map((key: any, idx: number) => (
                    <p key={idx}>{key}</p>
                    // <p>{healthStatus[key]}</p>
                ))}
            </div>
        </div>
    );
};

export default App;
