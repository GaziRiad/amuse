import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: 'eh9ib995',
  dataset: 'production',
  apiVersion: '2024-09-14',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
