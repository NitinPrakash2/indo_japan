import { sanityClient } from './client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  if (!source) return null;
  return builder.image(source);
}
