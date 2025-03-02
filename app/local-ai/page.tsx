import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'Running a Local AI Model on Ubuntu' })

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <Image
        src="/static/images/local-ai.webp"
        alt="Local AI Project"
        width={400}
        height={300}
        className="mb-8 rounded-lg shadow-lg"
      />
      <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
        Running a Local AI Model on Ubuntu
      </h1>
      <div className="max-w-2xl">
        <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
          This exciting project is currently under development. Soon, you'll find a comprehensive
          guide on installing and running large language models locally on Ubuntu, complete with
          performance insights and practical applications.
        </p>
        <div className="mb-8 inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="relative mr-2 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-gray-500"></span>
          </span>
          In Development
        </div>
        <div>
          <Link
            href="/"
            className="text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
