import axios from "axios";

import { queryExceptions } from '../../utils/statusKeys';

type FactoryFourAPIClient = {
    getHealthStatus: (queryString: string) => Promise<any>;
};

export const useFactoryFourAPIClient = (): FactoryFourAPIClient => {

    const baseUrl = (queryString: string) =>
        `https://api.factoryfour.com/${queryString}/health/status`;

    const handleCorsUrl = (queryString: string) =>
        `https://cors-anywhere.herokuapp.com/${baseUrl(queryString)}`;

    const handleUrl = (queryString: string) => {
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

    const getRequest = async (url: string): Promise<any> => {
        const res = await axios.get(url);
        return res.data
    }

    const getHealthStatus = async (queryString: string): Promise<any> => {
        return await getRequest(handleUrl(queryString));
    }

    return { getHealthStatus }
}
