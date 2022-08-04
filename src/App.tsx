import { useState, useEffect } from "react";
import axios from "axios";

import HeaderBar from "./components/HeaderBar";

export const App = () => {
    const [healthStatus, setHealthStatus] = useState<any>({
        accounts: {},
        assets: {},
        customers: {},
        datapoints: {},
        devices: {},
        documents: {},
        forms: {},
        invites: {},
        media: {},
        messages: {},
        namespaces: {},
        orders: {},
        patients: {},
        relationships: {},
        rules: {},
        templates: {},
        users: {},
        workflows: {},
    });

    const baseUrl = (queryString: string) =>
        `https://api.factoryfour.com/${queryString}/health/status`;

    const handleCorsUrl = (queryString: string) =>
        `https://cors-anywhere.herokuapp.com/${baseUrl(queryString)}`;

    const getHealthStatusData = () => {
        axios
            .get(baseUrl("accounts"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, accounts: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    accounts: { success: false, message: "error" },
                })
            );

        axios
            .get(baseUrl("assets"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, assets: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    assets: { success: false, message: "error" },
                })
            );

        axios
            .get(baseUrl("customers"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, customers: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    customers: { success: false, message: "error" },
                })
            );

        axios
            .get(baseUrl("datapoints"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, datapoints: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    datapoints: { success: false, message: "error" },
                })
            );

        axios
            .get(baseUrl("devices"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, devices: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    devices: { success: false, message: "error" },
                })
            );

        axios
            .get(baseUrl("documents"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, documents: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    documents: { success: false, message: "error" },
                })
            );

        axios
            .get(baseUrl("forms"))
            .then((res) => setHealthStatus({ forms: res.data }))
            .catch((error) =>
                setHealthStatus({ forms: { success: false, message: "error" } })
            );

        axios
            .get(handleCorsUrl("invites"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, invites: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    invites: {
                        success: false,
                        message: "error",
                        error: error.response,
                    },
                })
            );

        axios
            .get(baseUrl("media"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, media: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    media: { success: false, message: "error" },
                })
            );

        axios
            .get(handleCorsUrl("messages"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, messages: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    messages: {
                        success: false,
                        message: "error",
                        error: error.response,
                    },
                })
            );

        axios
            .get(baseUrl("namespaces"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, namespaces: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    namespaces: { success: false, message: "error" },
                })
            );

        axios
            .get(baseUrl("orders"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, orders: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    orders: { success: false, message: "error" },
                })
            );

        axios
            .get(baseUrl("patients"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, patients: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    patients: { success: false, message: "error" },
                })
            );

        axios
            .get(baseUrl("relationships"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, relationships: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    relationships: { success: false, message: "error" },
                })
            );

        axios
            .get(baseUrl("rules"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, rules: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    rules: { success: false, message: "error" },
                })
            );

        axios
            .get(baseUrl("templates"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, templates: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    templates: { success: false, message: "error" },
                })
            );

        axios
            .get(handleCorsUrl("users"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, users: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    users: {
                        success: false,
                        message: "error",
                        error: error.response,
                    },
                })
            );

        axios
            .get(baseUrl("workflows"))
            .then((res) =>
                setHealthStatus({ ...healthStatus, workflows: res.data })
            )
            .catch((error) =>
                setHealthStatus({
                    ...healthStatus,
                    workflows: { success: false, message: "error" },
                })
            );
    };

    useEffect(() => {
        getHealthStatusData();
    }, []);

    console.log(healthStatus);

    if (!healthStatus) return <p>no</p>;

    return (
        <div className="App">
            <HeaderBar />
            <div>
                {Object.keys(healthStatus).map((key: any) => (
                    <p>{key}</p>
                    // <p>{healthStatus[key]}</p>
                ))}
            </div>
        </div>
    );
};

export default App;
