# Posts Reference (Markdown & Components)

This file contains examples of how posts were structured in the previous version of the blog. Use this as a reference for future posts.

## Frontmatter (Metadata)

Posts use a `metadata` object exported from the MDX file.

```javascript
export const metadata = {
  title: 'Post Title',
  description: 'Post description for SEO and social sharing',
  openGraph: {
    title: 'Post Title',
    description: 'Post description',
    images: [{ url: '/og/post-slug' }]
  }
}
```

## Formatting Examples

Standard Markdown features are supported:

- **Bold text** and _Italic text_
- [Links](https://example.com)
- Unordered lists (like this one)
- Ordered lists
- Headings with custom IDs for deep linking: `## Heading Title [#custom-id]`

## Custom Components

### Tables

Tables are implemented as React components for better styling and flexibility.

**Usage in MDX:**
```mdx
import { Table } from './table'

<Table />
```

**Implementation example (`table.tsx`):**
```tsx
export function Table() {
  return (
    <div className="relative my-12 lg:-mx-20 overflow-x-auto">
      <table className="w-full max-w-4xl mx-auto border-collapse border border-neutral-300 dark:border-neutral-700">
        <thead>
          <tr className="bg-neutral-100 dark:bg-neutral-900">
            <th className="border ...">Column 1</th>
            <th className="border ...">Column 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border ...">Row 1, Col 1</td>
            <td className="border ...">Row 1, Col 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
```

### Charts

Charts use `recharts` and are also implemented as separate components.

**Usage in MDX:**
```mdx
import { Chart } from './chart'

<Chart />
```

**Implementation details:**
- Use `use client` for interactivity.
- Import `LineChart`, `Line`, `XAxis`, `YAxis`, etc., from `recharts`.
- Use a `downloads.json` or similar for data.
- Include a `ResponsiveContainer` for mobile-friendliness.

---

## Original Posts Data (Summary)

Below is the list of posts that were present before the reset:

| ID | Date | Title |
|----|------|-------|
| the-ai-cloud | Oct 17, 2025 | The AI Cloud |
| making-the-web-faster | June 23, 2021 | Making the web. Faster. |
| next-for-vercel | Dec 16, 2020 | Next for Vercel |
| develop-preview-test | June 11, 2020 | Develop, preview, test |
| static-hoisting | May 2, 2020 | Static hoisting |
| an-ode-to-code-golf | April 26, 2020 | An ode to code golf |
| vercel | April 21, 2020 | Vercel |
| 2019-in-review | Jan 2, 2020 | 2019 in review |
| its-hard-to-forego-efficiency | March 28, 2017 | It's hard to forego efficiency |
| 2016-in-review | Jan 6, 2017 | 2016 in review |
| addressable-errors | Feb 4, 2016 | Addressable errors |
| pure-ui | July 13, 2015 | Pure UI |
| ecmascript-6 | Feb 22, 2015 | ECMAScript 6 |
| 7-principles-of-rich-web-applications | Nov 4, 2014 | 7 principles of rich web applications |
