/// <reference types="vite/client" />

declare module '*.mdx' {
  const component: (props: Record<string, unknown>) => import('react').ReactElement
  export default component
  export const frontmatter: Record<string, unknown>
}
