import ReactMarkdown from 'react-markdown'
import type { BlogPost } from '@/lib/getPosts'

type FeaturedPost = {
  title: string
  description: string
  cover: string
  features: string[]
  readTime: string
  link: string
}

const featuredPosts: FeaturedPost[] = [
  {
    title: 'Building an ERP with Microservices',
    description: 'Notes on scaling ERP workflows with a polyglot data layer and clean service boundaries.',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    features: ['Microservices', 'MySQL + PostgreSQL', 'MongoDB'],
    readTime: 'Field notes',
    link: '#',
  },
  {
    title: 'CI/CD on AWS EC2',
    description: 'How I set up automated testing and deployment for production workloads.',
    cover: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1000&q=80',
    features: ['AWS EC2', 'Automation', 'Deployment'],
    readTime: 'Field notes',
    link: '#',
  },
  {
    title: 'Designing Flexible APIs with OData v4',
    description: 'Using OData for structured querying across custom microservices.',
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
    features: ['OData v4', 'Node.js', 'APIs'],
    readTime: 'Field notes',
    link: '#',
  },
]

export function BlogsList({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <p className="section-eyebrow">Writing</p>
      <h2 id="blog-title" className="section-title">Notes on engineering and delivery</h2>
      <p className="section-lede">Short field notes from ERP, API, and deployment work.</p>

      <div className="blog-featured-grid">
        {featuredPosts.map((post) => (
          <article key={post.title} className="blog-card glass-card">
            <div className="blog-card-media" style={{ backgroundImage: `url(${post.cover})` }} />
            <div className="blog-card-content">
              <p className="muted" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.readTime}</p>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="blog-card-features">
                {post.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
              <a className="btn ghost" href={post.link}>
                Read topic ->
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="grid-2">
        {posts.map((p) => (
          <article key={p.slug} className="post post-with-media glass-panel">
            <div className="post-media" style={{ backgroundImage: `url(${p.cover})` }} />
            <div className="post-body">
              <h3>{p.title}</h3>
              <p className="muted">{p.date}</p>
              {p.summary && <p>{p.summary}</p>}
              <details>
                <summary>Read more</summary>
                <div className="markdown">
                  <ReactMarkdown>{p.content}</ReactMarkdown>
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
