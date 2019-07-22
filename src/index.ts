const isProduction: boolean = process.env.NODE_ENV === 'production'
const prefix: string = 'Invariant failed'

export default function invariant(condition: boolean, message?: string): never {
  if (condition) {
    return undefined as never
  }

  throw new Error(isProduction ? prefix : `${prefix}: ${message || ''}`)
}
