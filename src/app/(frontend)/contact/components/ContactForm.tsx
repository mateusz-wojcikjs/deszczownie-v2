'use client'

import { Form } from '@/payload-types'
import { useState } from 'react'
import { Icon } from '../../components/icon/icon.component'
import { IconName } from '../../enums'

interface ContactFormProps {
  form: Form
}

export const ContactForm: React.FC<ContactFormProps> = ({ form }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const placeholderMap: Record<string, string> = {
    name: 'Podaj swoje imię',
    surname: 'Podaj swoje nazwisko',
    email: 'Podaj swój adres email',
    phone: 'Podaj swój numer telefonu',
    message: 'Napisz swoją wiadomość',
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)
    const submissionData = Array.from(formData.entries()).map(([field, value]) => ({
      field,
      value: value.toString(),
    }))

    try {
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: form.id,
          submissionData,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      const confirmationMessage = form.confirmationMessage?.root?.children?.[0]?.text as string
      setMessage({
        type: 'success',
        text: confirmationMessage || 'Thank you for your submission!',
      })

      e.currentTarget.reset()
    } catch (error) {
      setMessage({
        type: 'error',
        text:
          'There was an error submitting the form. Please try again. ' + (error as Error).message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {form.fields?.map((field, index) => {
        if (field.blockType === 'message') {
          return (
            <div key={field.id} className="prose">
              {field.message?.root?.children?.[0]?.text as string}
            </div>
          )
        }

        const commonProps = {
          name: field.name,
          id: field.id || undefined,
          required: field.required || false,
          placeholder: placeholderMap[field.name] || '',
          className:
            'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500',
        }

        if (field.blockType === 'checkbox') {
          return (
            <div key={field.id} className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="checkbox"
                  {...commonProps}
                  defaultChecked={field.defaultValue || false}
                  className="peer sr-only"
                />
                <div className="h-5 w-5 rounded border-2 border-gray-300 bg-white peer-checked:border-primary-500 peer-checked:bg-primary-500 transition-colors flex items-center justify-center">
                  <Icon iconName={IconName.Checkmark} color="white" size={16} />
                </div>
              </div>
              <label
                htmlFor={field.id || undefined}
                className="text-sm font-medium text-gray-700 cursor-pointer"
              >
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
            </div>
          )
        }

        const nextField = form.fields?.[index + 1]
        const shouldWrap =
          nextField &&
          nextField.blockType !== 'message' &&
          'width' in field &&
          'width' in nextField &&
          field.width === 50 &&
          nextField.width === 50 &&
          (field.blockType === 'text' ||
            field.blockType === 'email' ||
            field.blockType === 'textarea' ||
            field.blockType === 'number') &&
          (nextField.blockType === 'text' ||
            nextField.blockType === 'email' ||
            nextField.blockType === 'textarea' ||
            nextField.blockType === 'number')

        if (shouldWrap) {
          return (
            <div key={field.id} className="flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor={field.id || undefined}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>

                {field.blockType === 'text' && (
                  <input type="text" {...commonProps} defaultValue={field.defaultValue || ''} />
                )}

                {field.blockType === 'email' && <input type="email" {...commonProps} />}

                {field.blockType === 'textarea' && (
                  <textarea {...commonProps} rows={4} defaultValue={field.defaultValue || ''} />
                )}

                {field.blockType === 'number' && (
                  <input type="number" {...commonProps} defaultValue={field.defaultValue || ''} />
                )}
              </div>
              <div className="w-1/2">
                <label
                  htmlFor={nextField.id || undefined}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {nextField.label}
                  {nextField.required && <span className="text-red-500 ml-1">*</span>}
                </label>

                {nextField.blockType === 'text' && (
                  <input
                    type="text"
                    {...commonProps}
                    name={nextField.name}
                    id={nextField.id || undefined}
                    defaultValue={nextField.defaultValue || ''}
                  />
                )}

                {nextField.blockType === 'email' && (
                  <input
                    type="email"
                    {...commonProps}
                    name={nextField.name}
                    id={nextField.id || undefined}
                  />
                )}

                {nextField.blockType === 'textarea' && (
                  <textarea
                    {...commonProps}
                    name={nextField.name}
                    id={nextField.id || undefined}
                    rows={4}
                    defaultValue={nextField.defaultValue || ''}
                  />
                )}

                {nextField.blockType === 'number' && (
                  <input
                    type="number"
                    {...commonProps}
                    name={nextField.name}
                    id={nextField.id || undefined}
                    defaultValue={nextField.defaultValue || ''}
                  />
                )}
              </div>
            </div>
          )
        }

        const prevField = form.fields?.[index - 1]
        if (
          index > 0 &&
          prevField &&
          prevField.blockType !== 'message' &&
          'width' in prevField &&
          'width' in field &&
          prevField.width === 50 &&
          field.width === 50 &&
          (prevField.blockType === 'text' ||
            prevField.blockType === 'email' ||
            prevField.blockType === 'textarea' ||
            prevField.blockType === 'number') &&
          (field.blockType === 'text' ||
            field.blockType === 'email' ||
            field.blockType === 'textarea' ||
            field.blockType === 'number')
        ) {
          return null
        }

        return (
          <div key={field.id} className="w-full">
            <label
              htmlFor={field.id || undefined}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {field.blockType === 'text' && (
              <input type="text" {...commonProps} defaultValue={field.defaultValue || ''} />
            )}

            {field.blockType === 'email' && <input type="email" {...commonProps} />}

            {field.blockType === 'textarea' && (
              <textarea {...commonProps} rows={4} defaultValue={field.defaultValue || ''} />
            )}

            {field.blockType === 'number' && (
              <input type="number" {...commonProps} defaultValue={field.defaultValue || ''} />
            )}
          </div>
        )
      })}

      {message && (
        <div
          className={`p-4 rounded-md ${
            message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {message.text}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-500 text-white py-3 px-6 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Wysyłanie...' : form.submitButtonLabel || 'Wyślij'}
      </button>
    </form>
  )
}
