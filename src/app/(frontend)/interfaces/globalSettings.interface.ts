export interface MenuItem {
  label: string
  url: string
  isExternal: boolean
  submenu?: MenuItem[]
}

export interface GlobalSettings {
  id: number
  cta: {
    title: string
    buttonText: string
    buttonLink: string
    backgroundColor: 'secondary' | 'primary' | 'gray'
    background?: number | { url: string; alt?: string } | null
  }
  contact: {
    companyName: string
    address: string
    nip: string
    phone: string
    email: string
  }
  socialMedia: {
    facebook: string
    instagram: string
  }
  footer: {
    logoUrl: string
    copyrightText: string
    privacyPolicyUrl: string
  }
  navigation: {
    logoUrl: string
    menuItems: MenuItem[]
    contactButtonText: string
    contactButtonUrl: string
  }
}
