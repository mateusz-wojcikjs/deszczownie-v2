import { JSX } from 'react'
import { TableDataProps } from './tableData.types'
import clsx from 'clsx'

export const TableData: (props: TableDataProps) => JSX.Element = (props: TableDataProps): JSX.Element => {
  const { data, className }: TableDataProps = props;

  return (
    <table className={clsx(className, 'border-t-2 border-green-800/20')}>
      <tbody>
        {data.map(
          (row: string[], rowIndex: number): JSX.Element => (
            <tr key={rowIndex} className="border-b border-gray-400/30">
              {row.map(
                (cell: string, cellIndex: number): JSX.Element => (
                  <td
                    key={cellIndex}
                    className="first:text-primary-500 first:text-left first:font-bold px-1 xl:px-3 py-1 xl:py-2 text-center font-light text-sm"
                    dangerouslySetInnerHTML={{ __html: cell }}
                  />
                ),
              )}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
