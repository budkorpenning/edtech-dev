import { genPageMetadata } from 'app/seo'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'AI-Powered Speech-to-Text Web App' })

export default function SpeechToTextApp() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            AI-Powered Speech-to-Text Web App
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A comprehensive guide to building your own local AI speech-to-text application
          </p>
        </div>
        
        <div className="container py-12">
          <div className="prose dark:prose-invert max-w-none xl:col-span-2">
            <h2 className="text-gray-900 dark:text-gray-100">Project Guides</h2>
            <ol className="text-gray-500 dark:text-gray-400">
              <li><Link href="/guides/speech-to-text-purpose" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">Purpose and Prerequisites</Link> - Understand the project goals and prepare for development</li>
              <li><Link href="/guides/speech-to-text-environment" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">Setting Up the Environment</Link> - Configure your development environment and install dependencies</li>
              <li><Link href="/guides/speech-to-text-implementation" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">Creating the Application</Link> - Step-by-step guide to building all application components</li>
              <li><Link href="/guides/speech-to-text-summary" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">Summary and Educational Value</Link> - Explore the completed app and its applications in education</li>
            </ol>

            <h2 className="text-gray-900 dark:text-gray-100">Why Build a Local Speech-to-Text App?</h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li><strong className="text-gray-900 dark:text-gray-100">Privacy</strong>: No audio data leaves your computer</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Offline Capability</strong>: Works without internet connection</li>
              <li><strong className="text-gray-900 dark:text-gray-100">No API Costs</strong>: Free to use without subscription fees</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Educational Value</strong>: Learn to integrate AI models with web applications</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Customization</strong>: Adapt to specific needs and use cases</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Accessibility</strong>: Make content more accessible for diverse learners</li>
            </ul>

            <h2 className="text-gray-900 dark:text-gray-100">Application Features</h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li><strong className="text-gray-900 dark:text-gray-100">Intuitive Interface</strong>: Clean, responsive design for ease of use</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Real-time Processing</strong>: Quick transcription of recorded audio</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Multiple Languages</strong>: Support for various languages via Whisper AI</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Text Management</strong>: Copy, save, and clear transcriptions</li>
              <li><strong className="text-gray-900 dark:text-gray-100">Visual Feedback</strong>: Progress indicators during processing</li>
            </ul>

            <h2 className="text-gray-900 dark:text-gray-100">Technical Requirements</h2>
            <p className="text-gray-500 dark:text-gray-400">To complete this project, you'll need:</p>
            <ul className="text-gray-500 dark:text-gray-400">
              <li>Computer with at least 8GB RAM (16GB recommended)</li>
              <li>Python 3.8 or newer</li>
              <li>Working microphone</li>
              <li>Basic to intermediate Python programming skills</li>
              <li>Familiarity with web concepts (HTML, CSS, JavaScript basics)</li>
            </ul>

            <h2 className="text-gray-900 dark:text-gray-100">Getting Help</h2>
            <p className="text-gray-500 dark:text-gray-400">Each guide includes detailed instructions and troubleshooting tips. If you need additional help, check out:</p>
            <ul className="text-gray-500 dark:text-gray-400">
              <li>Whisper documentation on GitHub</li>
              <li>Flask documentation</li>
              <li>PyAudio documentation for audio processing questions</li>
              <li>Stack Overflow for technical questions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}