import { getPayload } from 'payload'
import { Form, Page } from '@/payload-types'
import { ContactForm } from './components/ContactForm'
import configPromise from '@payload-config'
import { DynamicContent, Icon } from '@/app/(frontend)/components'
import { IconName } from '../enums'
import { Collection } from '@/enums'
import { Routing } from '../enums/routing.enum'

export default async function ContactPage() {
  const payload = await getPayload({
    config: configPromise,
  })

  const forms = await payload.find({
    collection: Collection.Forms,
    where: {
      title: {
        equals: 'Formularz kontaktowy',
      },
    },
  })

  const contactPageData = await payload.find({
    collection: Collection.Pages,
    where: {
      slug: {
        equals: Routing.Contact,
      },
    },
  })

  const contactPage = contactPageData.docs[0] as Page
  const contactForm = forms.docs[0] as Form

  return (
    <main className="">
      {contactPage.blocks?.map((block) => <DynamicContent data={block} key={block.id} />)}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 lg:p-12">
            <h2 className="text-2xl font-semibold text-secondary-500 mb-4">Czy masz pytania?</h2>
            <p className="text-gray-600 mb-4">
              Zapraszamy do kontaktu. Wypełnij formularz i skontaktujemy się z Tobą tak szybko, jak
              to możliwe.
            </p>
            <ContactForm form={contactForm} />
          </div>
          <div className="bg-gray-50 rounded-lg p-6 lg:p-12 shadow-lg">
            <h2 className="text-2xl font-semibold text-secondary-500 mb-4">Dane kontaktowe</h2>
            <p className="text-gray-600 mb-4">
              Wybierz inną metodę kontaktu w celu zapoznania się z naszą ofertą. Zadzwoń, napisz
              e-mail lub skorzystaj z formularza kontaktowego.
            </p>
            <div className="space-y-4 mt-12">
              <div className="flex items-center gap-4">
                <div className="bg-primary-500 rounded-full p-4">
                  <Icon iconName={IconName.Address} color="white" size={32} />
                </div>
                <address>
                  <p className="text-gray-600 not-italic">
                    <strong>Adres:</strong>
                    <br />
                    KMK Agro Sp. J.
                    <br />
                    ul. Poznańska 20
                    <br />
                    Brodowo 63-000 Środa Wlkp.
                  </p>
                </address>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary-500 rounded-full p-4">
                  <Icon iconName={IconName.Phone} color="white" size={32} />
                </div>
                <p className="text-gray-600">
                  <strong>Telefon:</strong>
                  <br />
                  <a href="tel:605331418" className="text-primary-500 hover:text-primary-600">
                    605 331 418
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary-500 rounded-full p-4">
                  <Icon iconName={IconName.Email} color="white" size={32} />
                </div>
                <p className="text-gray-600">
                  <strong>Email:</strong>
                  <br />
                  <a
                    href="mailto:kontakt@kmkagro.com"
                    className="text-primary-500 hover:text-primary-600"
                  >
                    kontakt@kmkagro.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
