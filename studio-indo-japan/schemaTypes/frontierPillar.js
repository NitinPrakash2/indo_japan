import { defineType, defineField } from 'sanity';

export const frontierPillar = defineType({
  name: 'frontierPillar',
  title: 'Frontier Bento Pillar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Pillar Title (e.g. Monozukuri: Zero-Defect Precision)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Top Category Tag (e.g. OPERATIONAL SUPREMACY)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Pillar Philosophy & Executive Summary',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stat',
      title: 'Key Stat / Metric (e.g. 99.999%, 33,000+, $50 Billion)',
      type: 'string',
    }),
    defineField({
      name: 'statLabel',
      title: 'Metric Label (e.g. Production Yield Standard)',
      type: 'string',
    }),
    defineField({
      name: 'bgImage',
      title: 'Background Visual Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'iconType',
      title: 'Pillar Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Cpu (Robotics / Monozukuri)', value: 'Cpu' },
          { title: 'Shield (Shinise / Longevity)', value: 'Shield' },
          { title: 'TrendingUp (Corridor / Bilateral)', value: 'TrendingUp' },
        ],
      },
      initialValue: 'Cpu',
    }),
    defineField({
      name: 'highlights',
      title: 'Key Highlights Checklist',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'order',
      title: 'Display Sequence Order (1, 2, 3...)',
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
