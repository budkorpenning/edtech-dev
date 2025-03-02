import { genPageMetadata } from 'app/seo'
import ProjectGuidesPage from '@/components/ProjectGuidesPage'

export const metadata = genPageMetadata({ title: 'AI-Powered Speech-to-Text Web App Project' })

export default function SpeechToTextApp() {
  return <ProjectGuidesPage projectKey="speech-to-text-app" />
}
