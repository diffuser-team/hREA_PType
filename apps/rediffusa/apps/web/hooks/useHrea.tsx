import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import connectVF, {ClientOptions} from "hrea-client";
import {useEffect, useState} from "react";
import { CONDUCTOR_URI, ADMIN_CONDUCTOR_URI, HOLO_APP_ID } from "../constants";

const useHreaClient = (options?: ClientOptions) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});
    const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

    useEffect(() => {
        const opts: ClientOptions = options || {
            conductorUri: CONDUCTOR_URI,
            adminConductorUri: ADMIN_CONDUCTOR_URI,
            appID: HOLO_APP_ID
          };
        
        const connect = async () => {
            try {
                const vf = await connectVF(opts);
                
                setClient(vf)
                setLoading(false)
                setError({})
            } catch (err) {
                setClient(undefined)
                setError(err as any)
            }
        }

        connect();
    });

    return {loading, error, client}
}

export default useHreaClient;