import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'ah9gwp1x',
  dataset: 'production',
  useCdn: true, // Use CDN for super fast response, false for real-time draft previews
  apiVersion: '2024-01-01',
});
