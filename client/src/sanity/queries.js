import { sanityClient } from './client';

export const GET_EXPEDITION_META = `*[_type == "expeditionMeta"][0]`;
export const GET_ITINERARY = `*[_type == "itineraryDay"] | order(day asc)`;
export const GET_HOSTS = `*[_type == "distinguishedHost"] | order(order asc)`;
export const GET_INCLUSIONS = `*[_type == "executiveInclusion"] | order(order asc)`;
export const GET_PILLARS = `*[_type == "frontierPillar"] | order(order asc)`;
export const GET_FAQS = `*[_type == "executiveFaq"] | order(order asc)`;

/**
 * Safe fetch helper that gracefully handles network errors or offline mode
 */
export async function fetchSanityData(query, defaultValue = null) {
  try {
    const data = await sanityClient.fetch(query);
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return defaultValue;
    }
    return data;
  } catch (err) {
    console.warn(`[Sanity] Fetch failed for query, using fallback data:`, err?.message || err);
    return defaultValue;
  }
}
