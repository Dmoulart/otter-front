import {object, string, number, array, type Output} from "valibot";

export const albumSchema = object({
  id: number(),
  description: string(),
  title: string(),
  artist: number(),
  year: number(),
});

export const albumsSchema = array(albumSchema);

export type Album = Output<typeof albumSchema>;
export type Albums = Output<typeof albumsSchema>;
