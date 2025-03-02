import React from 'react'
import Link from './Link'
import { allGuides } from 'contentlayer/generated'
import projectsData from '@/data/projectsData'
import PageTitle from './PageTitle'
import SectionContainer from './SectionContainer'
import Tag from './Tag'

interface ProjectGuidesPageProps {
  projectKey: string
}

export default function ProjectGuidesPage({ projectKey }: ProjectGuidesPageProps) {
  // Get project data
  const project = projectsData.find((p) => p.key === projectKey)

  if (!project) {
    return <div>Project not found</div>
  }

  // Get all guides for this project
  const guides = allGuides
    .filter((guide) => guide.project === projectKey && !guide.draft)
    .sort((a, b) => (a.order || 99) - (b.order || 99))

  // Create a unique list of all tags across the guides
  const tags = [...new Set(guides.flatMap((guide) => guide.tags || []))]

  return (
    <SectionContainer>
      <div className="space-y-8">
        <PageTitle>{project.title}</PageTitle>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Project Description Card */}
          <div className="h-full rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="relative h-72 overflow-hidden rounded-lg">
              <img
                src={project.imgSrc || '/static/images/placeholder.png'}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg">{project.description}</p>
                {tags.length > 0 && (
                  <div className="mt-4">
                    <h3 className="mb-2 text-sm font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Topics covered
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Guides List Card */}
          <div className="mt-6 h-full lg:mt-0">
            <div className="h-full rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                Guides in this Project
              </h3>
              <div className="space-y-4">
                {guides.map((guide, index) => (
                  <div key={guide.slug} className="flex items-start">
                    <div className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                      {guide.order || index + 1}
                    </div>
                    <div className="flex-grow">
                      <Link
                        href={`/guides/${guide.slug}`}
                        className="hover:text-primary-600 dark:hover:text-primary-400 font-medium text-gray-900 dark:text-gray-100"
                      >
                        {guide.title}
                      </Link>
                      {guide.summary && (
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          {guide.summary}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
