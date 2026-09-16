/** True when a media path from src/data/*.json points at a video file. */
export const isVideo = (path: string) => /\.(mp4|webm|mov)$/i.test(path);
