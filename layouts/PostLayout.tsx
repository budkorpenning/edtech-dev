import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Guides, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { allGuides } from 'contentlayer/generated'
import projectsData from '@/data/projectsData'

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
  content: CoreContent<Guides>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

// Project navigation component
const ProjectNavigation = ({ content, label }) => {
  const { project } = content

  if (!project) return null

  // Find all guides from the same project
  const projectGuides = allGuides
    .filter((guide) => guide.project === project && !guide.draft)
    .sort((a, b) => (a.order || 99) - (b.order || 99))

  if (projectGuides.length <= 1) return null

  // Find current guide index
  const currentIndex = projectGuides.findIndex((guide) => guide.slug === content.slug)
  const prevGuide = currentIndex > 0 ? projectGuides[currentIndex - 1] : null
  const nextGuide = currentIndex < projectGuides.length - 1 ? projectGuides[currentIndex + 1] : null

  // Find project data
  const projectData = projectsData.find((p) => p.key === project)

  return (
    <div className="mt-2 mb-8 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-3 flex items-center gap-4">
        <Link href={projectData?.href || '#'} className="flex-shrink-0">
          <div className="relative h-24 w-24 overflow-hidden rounded-lg">
            <img
              src={projectData?.imgSrc || '/static/images/placeholder.png'}
              alt={projectData?.title || 'Project'}
              className="h-full w-full object-cover"
            />
          </div>
        </Link>
        <div>
          <Link
            href={projectData?.href || '#'}
            className="hover:text-primary-600 dark:hover:text-primary-400"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {projectData?.title ||
                project
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
            </h3>
          </Link>
          <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <span className="bg-primary-600/10 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400 mr-2 inline-block rounded px-2 py-1 text-xs">
              Step {currentIndex + 1} of {projectGuides.length}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2 text-sm sm:flex-row sm:justify-between sm:space-y-0">
        <div className="min-h-[24px] sm:w-[240px]">
          {prevGuide ? (
            <Link
              href={`/guides/${prevGuide.slug}`}
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-4 w-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="line-clamp-1">{prevGuide.title}</span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>

        <div className="min-h-[24px] text-right sm:w-[240px]">
          {nextGuide && (
            <Link
              href={`/guides/${nextGuide.slug}`}
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center justify-end"
            >
              <span className="line-clamp-1">{nextGuide.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-4 w-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <div className="flex min-w-max">
          {projectGuides.map((guide, index) => (
            <div key={guide.slug} className="flex items-center">
              <Link
                href={`/guides/${guide.slug}`}
                className={`flex h-8 min-w-[2rem] items-center justify-center rounded px-3 text-xs font-medium ${
                  guide.slug === content.slug
                    ? 'bg-primary-600 dark:bg-primary-500 text-white'
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
        <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700">
          <div className="divide-y divide-gray-200 pb-0 dark:divide-gray-700">
            {/* Project navigation component at the top */}
            <ProjectNavigation content={content} label="Current Article" />

            <div>
              <div className="mb-2 text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                </time>
              </div>
              <div className="prose dark:prose-invert max-w-none pt-10 pb-8">{children}</div>
            </div>

            <div className="hidden">
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
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="Back to the guides"
                >
                  &larr; Back to the guides
                </Link>
              </div>
            </div>

            {/* Only show chronological navigation if not part of a project */}
            {!content.project && (next || prev) && (
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
        </div>

        {/* Project navigation component at the bottom */}
        {content.project && <ProjectNavigation content={content} label="Current Article" />}
        {/* Footer */}
        <div className="mt-8">
          <div className="text-sm leading-5 font-medium">
            {tags && (
              <div className="py-4">
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
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
