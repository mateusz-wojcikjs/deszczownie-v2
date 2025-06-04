import React from 'react'
import {
  ListItemNode,
  ListNode,
  LinkNode,
  TextNode,
  HeadingLevel,
  RichTextRendererProps,
} from './richText.types'

export const RichText: React.FC<RichTextRendererProps> = ({ content }) => {
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

  return (
    <div className="max-w-full w-full">
      {content.map((node, index) => {
        switch (node.type) {
          case 'heading': {
            const headingTag = (node as any).tag || 'h2' // Default to h2 if no tag specified
            const level = (parseInt(headingTag.replace('h', '')) as HeadingLevel) || 2

            const headingStyles = {
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

            if (node.children?.length === 1 && node.children[0].type === 'link') {
              return renderLinkNode(node.children[0] as LinkNode, index)
            }

            return (
              <p
                key={index}
                className={`text-md text-secondary-400 font-light text-sm lg:text-base mb-4 ${textAlignClass}`}
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

          default:
            return null
        }
      })}
    </div>
  )
}
