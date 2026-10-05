import { defineType, defineField } from 'sanity';

export const distinguishedHost = defineType({
  name: 'distinguishedHost',
  title: 'Distinguished Host / Speaker',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name & Honorific (e.g. H.E. Kenji Hiramatsu)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Primary Title / Office',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Organization / Institution',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Leader Portrait Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'topic',
      title: 'Masterclass Focus Topic',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Executive Biography / Impact',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'credentials',
      title: 'Key Credentials & Accolades',
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
