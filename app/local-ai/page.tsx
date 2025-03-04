import { genPageMetadata } from 'app/seo'
import ProjectGuidesPage from '@/components/ProjectGuidesPage'

export const metadata = genPageMetadata({ title: 'Running a Local AI Model on Ubuntu' })

export default function LocalAI() {
  return <ProjectGuidesPage projectKey="local-ai" />
}
