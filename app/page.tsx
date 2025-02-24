import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allGuides } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allGuides)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
