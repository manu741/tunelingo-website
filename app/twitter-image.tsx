// The opengraph-image file convention doesn't populate twitter:image,
// so re-export the same generated image under the twitter-image convention.
export { default, alt, contentType, size } from "./opengraph-image";
