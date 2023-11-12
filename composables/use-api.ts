import {parse, type Output} from "valibot";

const API = {
  "/albums": {GET: {schema: albumsSchema}},
} as const;

export type ApiClient = {
  [endpoint in ApiRoute]: ApiResource<endpoint>;
};

export type ApiResource<Endoint extends ApiRoute = any> = {
  [method in "GET"]: () => Promise<
    Output<(typeof API)[Endoint][method]["schema"]> | undefined
  >;
};

export type ApiRoute = keyof typeof API;

function createAPIClient() {
  const config = useRuntimeConfig().public.api;
  const baseURL = config.baseURL;

  const client: ApiClient = {} as ApiClient;
  for (const [endpoint, methods] of Object.entries(API)) {
    client[endpoint as ApiRoute] ??= {} as ApiResource;

    for (const [method, descriptor] of Object.entries(methods)) {
      client[endpoint as ApiRoute][method as "GET"] = async () => {
        try {
          const res = await useFetch(`${baseURL}${endpoint}`, {
            method: method as "GET" | "POST",
          });
          console.log('val', res.data.value);
          return parse(descriptor.schema, res.data.value);
        } catch (e) {
          console.error(e);
          throw e;
        }
      };
    }
  }
  return (endpoint: ApiRoute) => client[endpoint];
}

export let useAPI = (route: ApiRoute) => {
  const client = createAPIClient();
  useAPI = client;
  return client(route);
};
