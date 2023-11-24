import { CollectionConfig } from 'payload/types'

// fields
import { slugField } from '../../fields/slug'

// hooks
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { populatePagePath } from '../../hooks/populatePagePath'

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  versions: {
    maxPerDoc: 10,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'path',
      type: 'text',
      admin: {
        readOnly: true,
      }
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField(),
  ],
  hooks: {
    beforeValidate: [populatePagePath],
    beforeChange: [populatePublishedAt]
  }
}

export default Pages
