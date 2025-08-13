import { ButtonLink } from '@/app/(frontend)/components'
import { ButtonTheme } from '../../enums'

export default async function TestPage() {
  return (
    <div className="container py-12 bg-slate-100">
      <ButtonLink href="/" theme={ButtonTheme.Primary}>
        Test
      </ButtonLink>
      <ButtonLink href="/" theme={ButtonTheme.PrimaryStill}>
        Test
      </ButtonLink>
      <ButtonLink href="/" theme={ButtonTheme.Secondary}>
        Test
      </ButtonLink>
      <ButtonLink href="/" theme={ButtonTheme.SecondaryStill}>
        Test
      </ButtonLink>
      <ButtonLink href="/" theme={ButtonTheme.Text}>
        Test
      </ButtonLink>
      <ButtonLink href="/" theme={ButtonTheme.PrimaryOutlined}>
        Test
      </ButtonLink>
      <ButtonLink href="/" theme={ButtonTheme.SecondaryOutlined}>
        Test
      </ButtonLink>
    </div>
  )
}
