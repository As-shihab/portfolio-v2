import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogPost = {
  slug: string
  title: string
  date: string
  summary: string
  content: string
  cover: string
}

const defaultCover = 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80'

export function getPosts(): BlogPost[] {
  const postsDir = path.join(process.cwd(), 'content', 'blogs')
  if (!fs.existsSync(postsDir)) return []

  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
      const parsed = matter(raw)
      const slug = file.replace('.md', '')
      const rawDate = parsed.data.date
      const date = rawDate
        ? rawDate instanceof Date
          ? rawDate.toISOString().slice(0, 10)
          : String(rawDate)
        : ''

      return {
        slug,
        title: (parsed.data.title as string) || slug,
        date,
        summary: (parsed.data.summary as string) || '',
        content: parsed.content,
        cover: (parsed.data.cover as string) || defaultCover,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
