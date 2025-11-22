import { useEffect, useMemo, useState } from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

type Blog = {
  slug: string
  title: string
  date: string
  summary: string
  content: string
  cover: string
}

type FeaturedPost = {
  title: string
  description: string
  cover: string
  features: string[]
  readTime: string
  link: string
}

const defaultCover = 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80'

function FeaturedCard({ post }: { post: FeaturedPost }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [enableTilt, setEnableTilt] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(pointer: fine)')
    setEnableTilt(mq.matches)
    const handler = (event: MediaQueryListEvent) => setEnableTilt(event.matches)
    if (mq.addEventListener) mq.addEventListener('change', handler)
    else mq.addListener(handler)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler)
      else mq.removeListener(handler)
    }
  }, [])

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10
    const y = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10
    setTilt({ x, y })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  return (
    <article
      className="blog-card"
      onMouseMove={enableTilt ? handleMove : undefined}
      onMouseLeave={enableTilt ? resetTilt : undefined}
      style={
        enableTilt
          ? { transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }
          : undefined
      }
    >
      <div className="blog-card-media" style={{ backgroundImage: `url(${post.cover})` }} />
      <div className="blog-card-content">
        <p className="muted">{post.readTime}</p>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className="blog-card-features">
          {post.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
        <a className="btn ghost" href={post.link} target="_blank" rel="noreferrer">Read story →</a>
      </div>
    </article>
  )
}

export function Blogs() {
  const [posts, setPosts] = useState<Blog[]>([])

  const featuredPosts = useMemo<FeaturedPost[]>(() => [
    {
      title: 'Designing cinematic hero sections that convert',
      description: 'Breaking down my process for narrative-driven hero blocks, layering motion, and measuring the lift on engagement.',
      cover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
      features: ['Framer Motion', 'Storytelling', 'Metrics'],
      readTime: '7 min read • Thought Piece',
      link: '#',
    },
    {
      title: 'Building a markdown-driven blog pipeline with Vite',
      description: 'A lightweight approach for portfolios where content lives beside code, supports MDX-style blocks, and ships fast.',
      cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
      features: ['Vite', 'Content workflows', 'DX'],
      readTime: '5 min read • Engineering',
      link: '#',
    },
    {
      title: 'Micro-interactions that feel like magic',
      description: 'Notes from live projects on using hover states and parallax to guide attention without hurting performance.',
      cover: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1000&q=80',
      features: ['Motion', 'Accessibility', 'Performance'],
      readTime: '8 min read • Craft',
      link: '#',
    },
  ], [])

  useEffect(() => {
    const modules = import.meta.glob('../../content/blogs/*.md', { as: 'raw' })
    Promise.all(
      Object.entries(modules).map(async ([path, loader]) => {
        const raw = await (loader as () => Promise<string>)()
        const parsed = matter(raw)
        const slug = path.split('/').pop()?.replace('.md', '') || 'post'
        return {
          slug,
          title: (parsed.data.title as string) || slug,
          date: (parsed.data.date as string) || '',
          summary: (parsed.data.summary as string) || '',
          content: parsed.content,
          cover: (parsed.data.cover as string) || defaultCover,
        } as Blog
      })
    ).then((all) => {
      setPosts(all.sort((a, b) => (a.date < b.date ? 1 : -1)))
    })
  }, [])

  return (
    <section className="section" aria-labelledby="blog-title">
      <div className="container">
        <h2 id="blog-title" className="section-title">Latest writing</h2>
        <p className="section-lede">Personal notes from Shihab on building playful, high-performing web products.</p>
        <div className="blog-featured-grid">
          {featuredPosts.map((post) => (
            <FeaturedCard key={post.title} post={post} />
          ))}
        </div>
        <div className="grid-2">
          {posts.map((p) => (
            <article key={p.slug} className="post post-with-media">
              <div className="post-media" style={{ backgroundImage: `url(${p.cover || defaultCover})` }} />
              <h3>{p.title}</h3>
              <p className="muted">{p.date}</p>
              {p.summary && <p>{p.summary}</p>}
              <details>
                <summary>Read more</summary>
                <div className="markdown">
                  <ReactMarkdown>{p.content}</ReactMarkdown>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

