import { genPageMetadata } from 'app/seo'
import ProjectGuidesPage from '@/components/ProjectGuidesPage'

export const metadata = genPageMetadata({
  title: 'From Windows to Ubuntu - Complete Guide Collection',
})

export default function UbuntuGuides() {
  return <ProjectGuidesPage projectKey="ubuntu-guides" />
}
