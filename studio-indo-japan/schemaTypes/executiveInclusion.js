import { defineType, defineField } from 'sanity';

export const executiveInclusion = defineType({
  name: 'executiveInclusion',
  title: 'Executive Inclusion',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Inclusion Title (e.g. 5-Star Luxury Accommodations)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'place',
      title: 'Partner / Location (e.g. The Palace Hotel Tokyo & Nagoya Marriott)',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Detailed Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Feature Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'iconType',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          { title: 'Bed (Luxury Hotel)', value: 'Bed' },
          { title: 'Train (Shinkansen Bullet Rail)', value: 'Train' },
          { title: 'Utensils (Michelin Kaiseki)', value: 'Utensils' },
          { title: 'Languages (Bilingual Interpreters)', value: 'Languages' },
          { title: 'PlaneTakeoff (VIP Airport Fast-Track)', value: 'PlaneTakeoff' },
          { title: 'ShieldCheck (Consular Protocol & Security)', value: 'ShieldCheck' },
        ],
      },
      initialValue: 'Bed',
    }),
    defineField({
      name: 'order',
      title: 'Display Sequence Order',
      type: 'number',
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
