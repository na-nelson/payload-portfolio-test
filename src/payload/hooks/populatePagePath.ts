import type { BeforeValidateHook } from 'payload/dist/collections/config/types'

export const populatePagePath: BeforeValidateHook = ({ data, req, operation }) => {
  // console.log(req.body);
  console.log(data);
  if ( operation === 'create' || operation === 'update' ) {

    if ( req.body && req.body.breadcrumbs.length ) {
      const lastCrumb = req.body.breadcrumbs[req.body.breadcrumbs.length - 1];

      return {
        ...data,
        path: lastCrumb.url,
      }
    } else if ( req.body && req.body.slug ) {
      return {
        ...data,
        path: req.body.slug,
      }
    }

  }

  return data
}
