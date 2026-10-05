import { defineType, defineField } from 'sanity';

export const itineraryDay = defineType({
  name: 'itineraryDay',
  title: 'Itinerary Day',
  type: 'document',
  fields: [
    defineField({
      name: 'day',
      title: 'Day Number',
      type: 'number',
      validation: (rule) => rule.required().integer().min(1).max(10),
    }),
    defineField({
      name: 'date',
      title: 'Full Date (e.g. Saturday, 29 August 2026)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dateShort',
      title: 'Short Date Tag (e.g. 29 AUG)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City / Region (e.g. Tokyo, Nagoya)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tabLabel',
      title: 'Navigation Tab Label (e.g. AI & Governance)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Day Executive Theme',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Day Cover Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'overview',
      title: 'Day Executive Overview',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'accessBadge',
      title: 'Security / Protocol Badge',
      type: 'string',
      initialValue: 'CHATHAM HOUSE RULE • C-SUITE ONLY',
    }),
    defineField({
      name: 'keyFacilities',
      title: 'Key Facilities & Sites Visited',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'timeline',
      title: 'Field Sessions Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'time', title: 'Time Slot (e.g. 09:30 AM)', type: 'string' }),
            defineField({ name: 'tag', title: 'Session Type Tag', type: 'string' }),
            defineField({ name: 'title', title: 'Session Title', type: 'string' }),
            defineField({ name: 'host', title: 'Host Institution / Speaker', type: 'string' }),
            defineField({ name: 'desc', title: 'Executive Summary', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),
    defineField({
      name: 'keyTakeaways',
      title: 'Strategic Takeaways',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  orderings: [
    {
      title: 'Day Number, Ascending',
      name: 'dayAsc',
      by: [{ field: 'day', direction: 'asc' }],
    },
  ],
});
