import type { ComponentType, ReactNode } from 'react'

type MDXComponents = Record<string, ComponentType<{ children?: ReactNode }>>

type MDXContent = ComponentType<{ components?: Partial<MDXComponents> }>

interface Frontmatter {
  title: string
  description: string
  date: string
  author: string
  slug: string
  category: string
  readingTime: string
  keywords: string[]
}

interface MDXModule {
  default: MDXContent
  frontmatter: Frontmatter
}

export interface BlogPost extends Frontmatter {
  Component: MDXContent
}

const modules = import.meta.glob<MDXModule>('/content/blog/*.mdx', {
  eager: true,
})

let cached: BlogPost[] | null = null

export function getAllPosts(): BlogPost[] {
  if (cached) return cached

  const posts: BlogPost[] = []

  for (const [path, mod] of Object.entries(modules)) {
    const slug = path.split('/').pop()?.replace('.mdx', '') ?? ''
    const fm = mod.frontmatter

    posts.push({
      slug: fm.slug ?? slug,
      title: fm.title ?? 'Sin título',
      description: fm.description ?? '',
      date: fm.date ?? '',
      author: fm.author ?? 'Dr. Pablo Eglez',
      category: fm.category ?? '',
      readingTime: fm.readingTime ?? '5 min',
      keywords: fm.keywords ?? [],
      Component: mod.default,
    })
  }

  cached = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
  return cached
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}
