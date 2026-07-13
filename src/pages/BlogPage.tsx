import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/reveal'
import PageHelmet from '@/components/PageHelmet'
import { getAllPosts } from '@/lib/blog'

const ALL = 'Todas'

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = [ALL, ...new Set(posts.map((p) => p.category))]
  const [activeCategory, setActiveCategory] = useState(ALL)

  const filteredPosts =
    activeCategory === ALL
      ? posts
      : posts.filter((p) => p.category === activeCategory)

  const handleCategory = (cat: string) => {
    setActiveCategory(cat)
  }

  return (
    <>
      <PageHelmet
        title="Blog"
        description="Artículos sobre salud ginecológica, prevención y bienestar. Dr. Pablo Eglez, Cirujano Ginecólogo en Mendoza."
        canonical="/blog"
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal immediate>
          <h1 className="mb-4 text-center text-4xl font-semibold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            Educación y prevención para tu salud ginecológica
          </p>
        </Reveal>

        {categories.length > 1 && (
          <StaggerReveal immediate className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <StaggerItem key={cat}>
                <button
                  type="button"
                  onClick={() => handleCategory(cat)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    activeCategory === cat
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border/40 bg-white text-muted-foreground hover:border-primary/30 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              </StaggerItem>
            ))}
          </StaggerReveal>
        )}

        {filteredPosts.length === 0 && (
          <p className="text-center text-muted-foreground">
            No hay artículos en esta categoría.
          </p>
        )}

        <StaggerReveal immediate className="space-y-8">
          {filteredPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <article className="group rounded-lg border border-border/40 bg-white p-6 transition-colors hover:border-primary/20 hover:bg-primary/5 sm:p-8">
                <div className="mb-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('es-AR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.category}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" />
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="mb-2 text-xl font-semibold tracking-tight sm:text-2xl">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mb-4 text-muted-foreground">{post.description}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Leer más →
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>
    </>
  )
}
