export interface CmsCategory {
  id: number;
  title: string;
  slug: string;
  nestedCategory?: CmsCategory[];
}
