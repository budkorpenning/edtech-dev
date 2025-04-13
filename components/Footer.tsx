import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import PrivacyButton from './PrivacyButton'

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="flex flex-col items-center text-sm text-gray-500 dark:text-gray-400">
        <div className="mb-3 flex space-x-2">
          <PrivacyButton />
        </div>
        <div className="mb-2 flex space-x-2">
          <div>{siteMetadata.author}</div>
          <div>{`•`}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{`•`}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8">{`Built with Next.js and Tailwind CSS`}</div>
      </div>
    </footer>
  )
}
