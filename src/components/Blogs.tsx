import { getPosts } from '@/lib/getPosts'
import { BlogsList } from './BlogsList'

export function Blogs() {
  const posts = getPosts()

  return (
    <section className="section" id="writing" aria-labelledby="blog-title">
      <div className="container">
        <BlogsList posts={posts} />
      </div>
    </section>
  )
}
