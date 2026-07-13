import { Link, useParams } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { CTA } from '@/components/blog/CTA'
import PageHelmet from '@/components/PageHelmet'
import { getPostBySlug, getAllPosts } from '@/lib/blog'


export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <>
        <PageHelmet
          title="Artículo no encontrado"
          description="El artículo solicitado no existe o fue eliminado."
        />
        <Reveal>
          <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-24">
            <h1 className="mb-4 text-4xl font-semibold tracking-tight">
              Artículo no encontrado
            </h1>
            <p className="mb-8 text-muted-foreground">
              El artículo que buscás no existe o fue eliminado.
            </p>
            <Button asChild>
              <Link to="/blog">Volver al Blog</Link>
            </Button>
          </section>
        </Reveal>
      </>
    )
  }

  const { Component, title, description, date, author, category, readingTime } = post

  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, 3)

  return (
    <>
      <PageHelmet
        title={title}
        description={description}
        canonical={`/blog/${slug}`}
      />
      <Reveal immediate>
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{title}</span>
          </nav>

          <header className="mb-10">
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('es-AR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{category}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3" />
                {readingTime}
              </span>
              <span>·</span>
              <span>{author}</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h1>
          </header>

          <div className="prose prose-neutral max-w-none">
            <Component components={{ CTA }} />
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-12 border-t border-border/40 pt-10">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight">
                Artículos relacionados
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="group rounded-lg border border-border/40 bg-white p-5 transition-colors hover:border-primary/20 hover:bg-primary/5"
                  >
                    <div className="mb-2 text-xs text-muted-foreground">
                      {rp.category}
                    </div>
                    <h3 className="mb-2 font-semibold group-hover:text-primary transition-colors">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {rp.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 border-t border-border/40 pt-8">
            <Button asChild>
              <Link to="/blog">← Volver al Blog</Link>
            </Button>
          </div>
        </article>
      </Reveal>
    </>
  )
}
