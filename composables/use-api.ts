const API = {
  "/albums": {GET: true},
} as const;

export type ApiClient = {
  [endpoint in ApiRoute]: ApiResource;
};

export type ApiResource = {
  [method in "GET" | "POST"]: () => Promise<any>;
};

export type ApiRoute = keyof typeof API;

function createAPIClient() {
  const config = useRuntimeConfig().public.api;
  const baseURL = config.baseURL;

  const client: ApiClient = {} as ApiClient;
  for (const [endpoint, methods] of Object.entries(API)) {
    client[endpoint as ApiRoute] ??= {} as ApiResource;

    for (const [method, _] of Object.entries(methods)) {
      client[endpoint as ApiRoute][method as "GET" | "POST"] = async () =>
        await useFetch(`${baseURL}${endpoint}`, {
          method: method as "GET" | "POST",
        });
    }
  }
  return (endpoint: ApiRoute) => client[endpoint];
}

export let useAPI = (route: ApiRoute) => {
  const client = createAPIClient();
  useAPI = client;
  return client(route);
};
