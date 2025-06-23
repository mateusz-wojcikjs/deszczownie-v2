import { CaseStudy } from '@/payload-types'

export interface CmsCaseStudiesSectionBlock {
  id?: string
  title: string
  caseStudies: CaseStudy[]
}
