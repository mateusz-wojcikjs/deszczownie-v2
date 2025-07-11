import { CaseStudy } from '@/payload-types'

export interface CaseStudiesSectionData {
  caseStudies: CaseStudy[]
  title: string
  content: any
}

export interface CaseStudiesSectionProps {
  data: CaseStudiesSectionData
}
