export const apiVersion =
  process.env.SANITY_API_VERSION || '2025-04-04'

export const dataset = assertValue(
  process.env.SANITY_DATASET || 'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.SANITY_PROJECT_ID || '33f30qax',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

// export const readToken = assertValue(
//   process.env.SANITY_API_READ_TOKEN,
//   'Missing environment variable: SANITY_API_READ_TOKEN'
// )

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
