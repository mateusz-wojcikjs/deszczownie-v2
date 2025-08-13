import { CategoryList } from './components/categoryList.component'
import { CmsCategory } from '@/app/(frontend)/interfaces'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Collection } from '@/enums'

const mockCategories: CmsCategory[] = [
  {
    id: 1,
    title: 'Deszczownie',
    slug: 'deszczownie',
    nestedCategory: [
      {
        id: 2,
        title: 'Deszczownie szpulowe',
        slug: 'deszczownie-szpulowe',
        nestedCategory: [
          {
            id: 3,
            title: 'Deszczownie model GX',
            slug: 'deszczownie-szpulowe/model-gx',
          },
          { id: 4, title: 'Deszczownie model XJ', slug: 'deszczownie-szpulowe/model-xj' },
          { id: 5, title: 'Deszczownie model XJM', slug: 'deszczownie-model-xjm' },
          { id: 6, title: 'Deszczownie model SPEEDY RAIN', slug: 'deszczownie-model-speedy-rain' },
        ],
      },
      { id: 7, title: 'Deszczownie mostowe', slug: 'deszczownie-mostowe' },
    ],
  },
  { id: 8, title: 'Pompy', slug: 'pompy' },
  { id: 9, title: 'Armatura', slug: 'armatura' },
  { id: 10, title: 'Zraszacze', slug: 'zraszacze' },
]

export const CategorySidebar = ({ currentSlug }: { currentSlug: string }) => {
  return (
    <aside className="w-full bg-white p-2 py-4 xl:p-4 rounded-lg shadow-md top-24 sticky">
      <h2 className="font-bold mb-3 border-b pb-2 border-slate-300">Kategorie</h2>
      <CategoryList categories={mockCategories} currentSlug={currentSlug} />
    </aside>
  )
}
