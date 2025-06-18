import { getPayload } from 'payload'
import { NextResponse } from 'next/server'
import configPromise from '@payload-config'

export async function POST(req: Request) {
  try {
    const payload = await getPayload({
      config: configPromise,
    })
    const body = await req.json()

    const submission = await payload.create({
      collection: 'form-submissions',
      data: {
        form: body.form,
        submissionData: body.submissionData,
      },
    })

    return NextResponse.json(submission)
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
  }
}
