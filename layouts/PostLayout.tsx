import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Guide, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { allGuides } from 'contentlayer/generated'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Guide>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

// Project navigation component
const ProjectNavigation = ({ content }) => {
  const { project } = content
  
  if (!project) return null
  
  // Find all guides from the same project
  const projectGuides = allGuides
    .filter(guide => guide.project === project && !guide.draft)
    .sort((a, b) => (a.order || 99) - (b.order || 99))
  
  if (projectGuides.length <= 1) return null
  
  // Find current guide index
  const currentIndex = projectGuides.findIndex(guide => guide.slug === content.slug)
  const prevGuide = currentIndex > 0 ? projectGuides[currentIndex - 1] : null
  const nextGuide = currentIndex < projectGuides.length - 1 ? projectGuides[currentIndex + 1] : null
  
  return (
    <div className="mb-8 mt-2 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-3 font-semibold text-gray-900 dark:text-gray-100">
        <span className="mr-2 inline-block rounded bg-primary-600/10 px-2 py-1 text-xs text-primary-600 dark:bg-primary-400/10 dark:text-primary-400">
          Project
        </span>
        {project.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </div>
      
      <div className="flex flex-col space-y-2 text-sm sm:flex-row sm:justify-between sm:space-y-0">
        {prevGuide ? (
          <Link 
            href={`/guides/${prevGuide.slug}`} 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {prevGuide.title.length > 50 ? prevGuide.title.substring(0, 50) + '...' : prevGuide.title}
          </Link>
        ) : <div></div>}
        
        {nextGuide && (
          <Link 
            href={`/guides/${nextGuide.slug}`} 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            {nextGuide.title.length > 50 ? nextGuide.title.substring(0, 50) + '...' : nextGuide.title}
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
      
      <div className="mt-4 overflow-x-auto">
        <div className="flex min-w-max">
          {projectGuides.map((guide, index) => (
            <div key={guide.slug} className="flex items-center">
              <Link
                href={`/guides/${guide.slug}`}
                className={`flex h-8 min-w-[2rem] items-center justify-center rounded px-3 text-xs font-medium ${
                  guide.slug === content.slug
                    ? 'bg-primary-600 text-white dark:bg-primary-500'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {guide.order || index + 1}
              </Link>
              {index < projectGuides.length - 1 && (
                <div className="mx-1 h-px w-3 bg-gray-300 dark:bg-gray-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 dark:divide-gray-700">
            <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-y-8 xl:space-x-0">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="text-sm leading-5 font-medium whitespace-nowrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter
                                .replace('https://twitter.com/', '@')
                                .replace('https://x.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              {/* Project navigation component */}
              <ProjectNavigation content={content} />
              
              <div className="prose dark:prose-invert max-w-none pt-10 pb-8">{children}</div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(path)} rel="nofollow">
                  Discuss on Twitter
                </Link>
                {` • `}
                <Link href={editUrl(filePath)}>View on GitHub</Link>
              </div>
              {siteMetadata.comments && (
                <div
                  className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
            </div>
            <footer>
              <div className="divide-gray-200 text-sm leading-5 font-medium xl:col-start-1 xl:row-start-2 xl:divide-y dark:divide-gray-700">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && prev.path && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && next.path && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="Back to the guides"
                >
                  &larr; Back to the guides
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
