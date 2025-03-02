import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import { allGuides } from 'contentlayer/generated'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  // Group guides by project
  const projectGuides = {}
  
  allGuides.forEach(guide => {
    if (guide.project && !guide.draft) {
      if (!projectGuides[guide.project]) {
        projectGuides[guide.project] = []
      }
      projectGuides[guide.project].push(guide)
    }
  })
  
  // Sort guides within each project by order
  Object.keys(projectGuides).forEach(project => {
    projectGuides[project].sort((a, b) => (a.order || 99) - (b.order || 99))
  })

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Affordable AI Solutions
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-12">
            {projectsData.map((project) => {
              const guides = projectGuides[project.key] || [];
              
              return (
                <div key={project.title} className="lg:grid lg:grid-cols-2 lg:gap-8">
                  {/* Project Description Card */}
                  <div className="h-full rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                    <div className="relative h-72 overflow-hidden rounded-lg">
                      <img
                        src={project.imgSrc || '/static/images/placeholder.png'}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-6">
                      <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                        <Link href={project.href || '#'} className="text-gray-900 dark:text-gray-100">
                          {project.title}
                        </Link>
                      </h2>
                      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                        {project.description}
                      </p>
                      <Link
                        href={project.href || '#'}
                        className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Learn more about ${project.title}`}
                      >
                        Learn more &rarr;
                      </Link>
                    </div>
                  </div>
                  
                  {/* Guides List Card */}
                  {guides.length > 0 && (
                    <div className="mt-6 h-full lg:mt-0">
                      <div className="h-full rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                        <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                          Guides in this Project
                        </h3>
                        <div className="space-y-4">
                          {guides.map((guide, index) => (
                            <div key={guide.slug} className="flex items-start">
                              <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                                {guide.order || index + 1}
                              </div>
                              <div className="flex-grow">
                                <Link
                                  href={`/guides/${guide.slug}`}
                                  className="font-medium text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
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
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
