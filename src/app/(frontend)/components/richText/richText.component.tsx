import React from 'react'
import {
  ListItemNode,
  ListNode,
  LinkNode,
  TextNode,
  HeadingLevel,
  RichTextRendererProps,
  UploadNode,
  RichTextNode,
} from './richText.types'
import Image from 'next/image'

export const RichText: React.FC<RichTextRendererProps> = (props: RichTextRendererProps) => {
  const { content, prose = false }: RichTextRendererProps = props

  if (!content) return null

  const renderTextNode = (node: TextNode, idx: number) => {
    if (node.format === 1) {
      return <strong key={idx}>{node.text}</strong>
    }
    return node.text
  }

  const renderLinkNode = (node: LinkNode, idx: number) => {
    return (
      <a
        key={idx}
        href={node.fields.url}
        target={node.fields.newTab ? '_blank' : '_self'}
        rel={node.fields.newTab ? 'noopener noreferrer' : ''}
        className="button button--primary"
      >
        {node.children?.[0]?.text}
      </a>
    )
  }

  const renderListItem = (node: ListItemNode, idx: number) => {
    return (
      <li key={idx} className="mb-2">
        {node.children.map((child, childIdx) => renderTextNode(child, childIdx))}
      </li>
    )
  }

  const renderList = (node: ListNode, idx: number) => {
    const ListTag = node.tag === 'ul' ? 'ul' : 'ol'
    return (
      <ListTag key={idx} className="list-disc pl-6 mb-4 space-y-2">
        {node.children.map((child, childIdx) => renderListItem(child, childIdx))}
      </ListTag>
    )
  }

  const renderUpload = (node: UploadNode, idx: number) => {
    return (
      <Image
        key={idx}
        src={node.value.url}
        alt={node.value.alt}
        width={node.value.width}
        height={node.value.height}
        className="w-full h-auto my-8"
      />
    )
  }

  return (
    <div className={`max-w-full w-full ${prose ? 'prose prose-slate max-w-none' : ''}`}>
      {content.map((node: RichTextNode, index: number) => {
        switch (node.type) {
          case 'heading': {
            const headingTag = (node as unknown as { tag: string }).tag || 'h2'
            const level = (parseInt(headingTag.replace('h', '')) as HeadingLevel) || 2

            const headingStyles = prose
              ? {
                  1: 'prose-h1',
                  2: 'prose-h2',
                  3: 'prose-h3',
                  4: 'prose-h4',
                  5: 'prose-h5',
                  6: 'prose-h6',
                }
              : {
                  1: 'text-4xl font-bold mb-6 text-slate-700',
                  2: 'text-3xl font-semibold mb-5 text-slate-700',
                  3: 'text-2xl font-semibold mb-4 text-slate-700',
                  4: 'text-xl font-medium mb-3 text-slate-700',
                  5: 'text-lg font-medium mb-2 text-slate-700',
                  6: 'text-base font-medium mb-2 text-slate-700',
                }

            const headingContent = node.children?.map((child, idx) => {
              if (child.type === 'text') {
                return renderTextNode(child as TextNode, idx)
              }
              return null
            })

            switch (level) {
              case 1:
                return (
                  <h1 key={index} className={headingStyles[1]}>
                    {headingContent}
                  </h1>
                )
              case 2:
                return (
                  <h2 key={index} className={headingStyles[2]}>
                    {headingContent}
                  </h2>
                )
              case 3:
                return (
                  <h3 key={index} className={headingStyles[3]}>
                    {headingContent}
                  </h3>
                )
              case 4:
                return (
                  <h4 key={index} className={headingStyles[4]}>
                    {headingContent}
                  </h4>
                )
              case 5:
                return (
                  <h5 key={index} className={headingStyles[5]}>
                    {headingContent}
                  </h5>
                )
              case 6:
                return (
                  <h6 key={index} className={headingStyles[6]}>
                    {headingContent}
                  </h6>
                )
              default:
                return (
                  <h2 key={index} className={headingStyles[2]}>
                    {headingContent}
                  </h2>
                )
            }
          }

          case 'paragraph': {
            const textAlignClass = node.format === 'justify' ? 'text-justify' : 'text-left'
            const proseClass = prose ? 'prose-p' : ''

            if (node.children?.length === 1 && node.children[0].type === 'link') {
              return renderLinkNode(node.children[0] as LinkNode, index)
            }

            return (
              <p
                key={index}
                className={`${proseClass} text-md text-secondary-400 font-light text-sm lg:text-base mb-4 ${textAlignClass}`}
              >
                {node.children?.map((child, idx) => {
                  if (child.type === 'linebreak') {
                    return <br key={idx} />
                  }
                  if (child.type === 'text') {
                    return renderTextNode(child, idx)
                  }
                  return null
                })}
              </p>
            )
          }

          case 'list':
            return renderList(node as ListNode, index)

          case 'upload':
            return renderUpload(node as UploadNode, index)

          default:
            return null
        }
      })}
    </div>
  )
}
