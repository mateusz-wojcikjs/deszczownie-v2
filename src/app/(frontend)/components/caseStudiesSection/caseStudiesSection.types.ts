import { CaseStudy } from '@/payload-types'

export interface CaseStudiesSectionData {
  caseStudies: CaseStudy[]
  title: string
}

export interface CaseStudiesSectionProps {
  data: CaseStudiesSectionData
}
