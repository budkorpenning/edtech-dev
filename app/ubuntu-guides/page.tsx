import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'From Windows to Ubuntu - Complete Guide Collection' })

export default function UbuntuGuides() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            From Windows to Ubuntu - Complete Guide Collection
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Your comprehensive guide to switching from Windows to Ubuntu
          </p>
        </div>
        
        <div className="container py-12">
          <div className="prose dark:prose-invert max-w-none xl:col-span-2">
            <h2 className="text-gray-900 dark:text-gray-100">Getting Started</h2>
            <ol className="text-gray-500 dark:text-gray-400">
              <li><Link href="/guides/ubuntu-installation-guide" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">Installation Guide</Link> - Complete guide to installing Ubuntu on your PC</li>
              <li><Link href="/guides/ubuntu-updates-guide" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">Essential Updates and Security</Link> - Learn how to keep your system updated and secure</li>
            </ol>

            <h2 className="text-gray-900 dark:text-gray-100">Setting Up Your Development Environment</h2>
            <ol start={3} className="text-gray-500 dark:text-gray-400">
              <li><Link href="/guides/ubuntu-dev-environment" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">Development Environment Setup</Link> - Set up the perfect development environment</li>
              <li><Link href="/guides/ubuntu-nvidia-setup" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">NVIDIA Setup Guide</Link> - Install and configure NVIDIA drivers for optimal performance</li>
            </ol>

            <h2 className="text-gray-900 dark:text-gray-100">Customization and Maintenance</h2>
            <ol start={5} className="text-gray-500 dark:text-gray-400">
              <li><Link href="/guides/ubuntu-personalization" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">System Personalization</Link> - Make Ubuntu your own with customization options</li>
              <li><Link href="/guides/ubuntu-backup-guide" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">Backup and Recovery</Link> - Keep your data safe with proper backup procedures</li>
            </ol>

            <h2 className="text-gray-900 dark:text-gray-100">Advanced Configuration</h2>
            <ol start={7} className="text-gray-500 dark:text-gray-400">
              <li><Link href="/guides/ubuntu-ai-ml-setup" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">AI and Machine Learning Setup</Link> - Configure Ubuntu for AI and Machine Learning development</li>
            </ol>

            <h2 className="text-gray-900 dark:text-gray-100">Why Switch to Ubuntu?</h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li><strong className="text-gray-900 dark:text-gray-100">Open Source</strong>: Free and community-driven development</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Security</strong>: Regular updates and built-in security features</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Development-friendly</strong>: Native support for programming tools</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Customization</strong>: Extensive customization options</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Performance</strong>: Efficient resource management</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Large Community</strong>: Active community support and resources</li>
            </ul>

            <h2 className="text-gray-900 dark:text-gray-100">Getting Help</h2>
            <p className="text-gray-500 dark:text-gray-400">Each guide includes detailed instructions and troubleshooting tips. If you need additional help, check out:</p>
            <ul className="text-gray-500 dark:text-gray-400">
              <li>Ubuntu's official documentation</li>
              <li>Our community forums</li>
              <li>Stack Overflow for technical questions</li>
              <li>Ubuntu's Ask Ubuntu platform</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
} 