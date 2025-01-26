export type Size = "original";
export type BackdropSize = Size | "w1280" | "w780" | "w300";
export type PosterSize = Size | "w500" | "w185" | "w342" | "w92";

export const getBackdropURL = (size: BackdropSize, path: string) => {
  console.log(`${process.env.IMAGE_URL}${size}${path}`);

  return `${process.env.IMAGE_URL}${size}${path}`;
};
