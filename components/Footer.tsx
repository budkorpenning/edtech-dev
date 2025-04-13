import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import PrivacyButton from './PrivacyButton'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
        </div>
        <div className="mb-1 flex flex-wrap justify-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span>{siteMetadata.author}</span>
          <span>•</span>
          <span>© {new Date().getFullYear()}</span>
          <span>•</span>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <PrivacyButton />
        </div>
      </div>
    </footer>
  )
}
