import { ButtonLink, TableData } from '@/app/(frontend)/components'
import { IconName } from '@/app/(frontend)/enums'
import { JSX } from 'react'
import Image from 'next/image'
import { ProductItemListProps } from './productItemList.types'
import clsx from 'clsx'
import Link from 'next/link'

export const ProductItemList: (props: ProductItemListProps) => JSX.Element = (props: ProductItemListProps): JSX.Element => {
  const { url, thumbnail, tableData, name, className }: ProductItemListProps = props;

  const isString2DArray = (value: unknown): value is string[][] => {
    return (
      Array.isArray(value) &&
      value.every(
        (row) =>
          Array.isArray(row) && row.every((cell) => typeof cell === "string")
      )
    );
  };

  const normalizeTableData = (value: unknown): string[][] => {
    if (isString2DArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.split("\n").map((row) => row.split(","));
    }

    return [];
  };

  return (
    <div className={clsx(
      className,
      'flex flex-col md:flex-row items-center gap-2 rounded-lg shadow-md overflow-hidden bg-slate-50'
    )}>
      <div className="min-h-48 w-full md:w-1/3 h-full relative">
        {typeof thumbnail !== 'number' && thumbnail.url && (
          <Link href={url}>
            <Image
              src={thumbnail.url}
              alt={thumbnail.alt}
              fill
              objectPosition='center'
              objectFit='cover'
            />
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-4 items-end py-4">
        <h3 className='w-full xl:text-lg pl-3'>{name}</h3>
        <TableData data={normalizeTableData(tableData)} />
        <ButtonLink icon={IconName.ArrowRight} href={url}>
          Zobacz szczegóły
        </ButtonLink>
      </div>
    </div>
  )
};
