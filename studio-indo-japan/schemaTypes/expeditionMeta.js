import { defineType, defineField } from 'sanity';

export const expeditionMeta = defineType({
  name: 'expeditionMeta',
  title: 'Expedition Hero & Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'bannerTag',
      title: 'Top Badge Tag',
      type: 'string',
      initialValue: 'EXCLUSIVE 25-LEADER DELEGATION • TOKYO & NAGOYA 2026',
    }),
    defineField({
      name: 'headlineZen',
      title: 'Main Headline First Line',
      type: 'string',
      initialValue: 'The Zen of Precision Meets',
    }),
    defineField({
      name: 'headlineFrontier',
      title: 'Main Headline Accent Line (Italic Crimson)',
      type: 'string',
      initialValue: 'The Frontier of Autonomous AI',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'datesText',
      title: 'Expedition Dates (e.g. 29 August – 02 September 2026)',
      type: 'string',
      initialValue: '29 August – 02 September 2026',
    }),
    defineField({
      name: 'locationText',
      title: 'Location (e.g. Tokyo & Nagoya, Japan)',
      type: 'string',
      initialValue: 'Tokyo & Nagoya, Japan',
    }),
    defineField({
      name: 'cohortCap',
      title: 'Cohort Cap Note',
      type: 'string',
      initialValue: 'Strictly Capped at 25 Leaders',
    }),
    defineField({
      name: 'heroBgImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
