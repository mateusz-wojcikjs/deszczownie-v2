import React from 'react';

interface RichTextNode {
  type: string;
  format?: string | number;
  children?: { text: string; format?: string | number }[];
}

interface RichTextRendererProps {
  content: RichTextNode[];
}

export const RichText: React.FC<RichTextRendererProps> = ({ content }) => {
  if (!content) return null;

  return (
    <div className=" max-w-full w-full">
      {content.map((node, index) => {
        switch (node.type) {
          case 'heading':
            return (
              <h2 key={index} className="">
                {node.children?.[0]?.text}
              </h2>
            );

          case 'paragraph': {
            const textAlignClass = node.format === 'justify' ? 'text-justify' : 'text-left';

            if (
              node.children.length === 1 &&
              node.children[0].type === 'link'
            ) {
              const linkNode = node.children[0];
              return (
                <div key={index} className="text-center">
                  <a
                    href={linkNode.fields.url}
                    target={linkNode.fields.newTab ? '_blank' : '_self'}
                    rel={linkNode.fields.newTab ? 'noopener noreferrer' : ''}
                    className="button button--primary"
                  >
                    {linkNode.children?.[0]?.text}
                  </a>
                </div>
              );
            }

            return (
              <p key={index} className={`text-md text-secondary-400 font-light mb-4 ${textAlignClass}`}>
                {node.children?.map((child, idx) => {
                  if (child.type === 'linebreak') {
                    return <br key={idx} />;
                  }
                  if (child.type === 'text') {
                    return child.format === 1 ? (
                      <strong key={idx}>{child.text}</strong>
                    ) : (
                      child.text
                    );
                  }
                  return null;
                })}
              </p>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
};
