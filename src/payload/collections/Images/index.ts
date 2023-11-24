import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Images: CollectionConfig = {
  slug: 'images',
  upload: {
    // staticURL: '/images',
    staticDir: path.resolve(__dirname, '../../../../media/images'),
    imageSizes: [
      {
        name: 'adminthumb',
        width: 400,
        height: 400,
        position: 'centre',
      },
      {
        name: 'small',
        width: 800,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'medium',
        width: 1600,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'large',
        width: 2400,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'adminthumb',
    mimeTypes: ['image/*'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}

export default Images
