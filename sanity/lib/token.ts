export const token = process.env.SANITY_API_READ_TOKEN || 'token'

if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN')
}