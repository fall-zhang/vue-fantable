export type LocalInfo = {
  pagination?: Record<string, string>
  table?: Record<string, string>
}

interface LocalFunction {
  (total: string | number): string
}