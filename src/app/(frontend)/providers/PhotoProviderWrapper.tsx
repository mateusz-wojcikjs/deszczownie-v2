'use client'
import { PhotoProvider } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProviderWrapperProps } from './photoProviderWrapper.interface'

export const PhotoProviderWrapper: React.FC<PhotoProviderWrapperProps> = (
  props: PhotoProviderWrapperProps,
) => {
  const { children, shouldRender = false } = props

  if (!shouldRender) {
    return <>{children}</>
  }

  return <PhotoProvider maskOpacity={0.5}>{children}</PhotoProvider>
}
