'use client'
import { PhotoProvider } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

export const PhotoProviderWrapper = ({
  children,
  pathname,
}: {
  children: React.ReactNode
  pathname: string
}) => {
  const shouldUseProvider = pathname.split('/').length === 3

  if (!shouldUseProvider) {
    return <>{children}</>
  }

  return <PhotoProvider maskOpacity={0.5}>{children}</PhotoProvider>
}
