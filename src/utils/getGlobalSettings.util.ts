import { getPayload } from 'payload'
import config from '@payload-config'
import { GlobalSetting } from '@/payload-types'

export const getGlobalSettings = async (): Promise<GlobalSetting | null> => {
  try {
    const payload = await getPayload({ config })

    const globalSettings = await payload.findGlobal({
      slug: 'global-settings',
      depth: 2, // This ensures media relations are populated
    })

    if (!globalSettings) {
      console.warn('Global settings not found, using default values')
      return null
    }

    console.log('Raw global settings from Payload:', globalSettings)

    return globalSettings as GlobalSetting
  } catch (error) {
    console.error('Error fetching global settings:', error)
    return null
  }
}
