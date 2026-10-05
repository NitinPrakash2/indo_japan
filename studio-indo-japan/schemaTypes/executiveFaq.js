import { defineType, defineField } from 'sanity';

export const executiveFaq = defineType({
  name: 'executiveFaq',
  title: 'Executive FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Detailed Answer',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Admissions & Selection', value: 'Admissions' },
          { title: 'Logistics & Hospitality', value: 'Logistics' },
          { title: 'Commercial Confidentiality', value: 'Security' },
          { title: 'Bilateral Access', value: 'Access' },
        ],
      },
      initialValue: 'Admissions',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
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
