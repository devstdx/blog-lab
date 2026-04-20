/**
 * Mock view counts — will be replaced with Vercel KV when ready
 */

const MOCK_VIEWS: Record<string, number> = {
  "the-ai-cloud": 14823,
  "making-the-web-faster": 9341,
  "next-for-vercel": 7256,
  "develop-preview-test": 6102,
  "static-hoisting": 4578,
  "an-ode-to-code-golf": 3291,
  "vercel": 11047,
  "2019-in-review": 2864,
  "its-hard-to-forego-efficiency": 1923,
  "2016-in-review": 2105,
  "addressable-errors": 3412,
  "pure-ui": 22541,
  "ecmascript-6": 8734,
  "7-principles-of-rich-web-applications": 31209,
};

export async function getViews(id: string): Promise<number> {
  return MOCK_VIEWS[id] ?? 0;
}

export async function getAllViews(): Promise<Record<string, number>> {
  return MOCK_VIEWS;
}

export async function incrementView(id: string): Promise<number> {
  // no-op in mock mode
  return MOCK_VIEWS[id] ?? 0;
}
