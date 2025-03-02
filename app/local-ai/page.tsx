import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import Link from '@/components/Link'

export const metadata = genPageMetadata({ title: 'Running a Local AI Model on Ubuntu' })

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <Image
        src="/static/images/local-ai.webp"
        alt="Local AI Project"
        width={400}
        height={300}
        className="rounded-lg shadow-lg mb-8"
      />
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Running a Local AI Model on Ubuntu
      </h1>
      <div className="max-w-2xl">
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
          This exciting project is currently under development. Soon, you'll find a comprehensive guide on
          installing and running large language models locally on Ubuntu, complete with performance insights
          and practical applications.
        </p>
        <div className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
          </span>
          In Development
        </div>
        <div>
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  )
} 