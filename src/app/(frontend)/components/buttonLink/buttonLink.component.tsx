import Link from 'next/link'
import { JSX } from 'react'
import clsx from 'clsx'
import { ButtonLinkProps } from './buttonLink.types'
import { sizeClasses, variantClasses } from './buttonLink.consts'
import { ButtonSize, ButtonTheme } from '@/app/(frontend)/enums'
import { Icon } from '@/app/(frontend)/components'

export const ButtonLink: (props: ButtonLinkProps) => JSX.Element = (
  props: ButtonLinkProps,
): JSX.Element => {
  const {
    href,
    download,
    external,
    icon,
    iconColor = '#fff',
    theme = ButtonTheme.Primary,
    size = ButtonSize.Medium,
    children,
    className,
  }: ButtonLinkProps = props
  const isExternal: boolean = !!(
    external ??
    (href?.startsWith('http') || href?.startsWith('mailto:'))
  )

  const sharedClasses: string = clsx(
    'transition-colors inline-flex items-center gap-x-3 uppercase rounded border-2 justify-center flex-nowrap',
    variantClasses[theme],
    sizeClasses[size],
    className,
  )

  const content = (
    <>
      {children}
      {icon && <Icon iconName={icon} color={iconColor} />}
    </>
  )

  if (!href) {
    return (
      <button className={sharedClasses} {...props}>
        {content}
      </button>
    )
  }

  if (isExternal) {
    return (
      <a
        href={href}
        className={sharedClasses}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={sharedClasses} {...props}>
      {content}
    </Link>
  )
}
