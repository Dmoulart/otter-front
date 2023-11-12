import {defineStore} from "pinia";
import {createAPIClient, type ApiRoute} from "~/api/create-api-client";

// export const useAPI = defineStore("api", () => {
//   const client = createAPIClient();

//   async function getAlbums() {
//     return await useFetch(
//       `${useRuntimeConfig().public.api.baseURL}${"/albums"}`,
//       {
//         method: "GET",
//       }
//     );
//   }

//   return {
//     client,
//   };
// });

export let useAPI = (route: ApiRoute) => {
  const client = createAPIClient();
  useAPI = client;
  return client(route);
};
