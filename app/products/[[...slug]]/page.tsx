import React from 'react'

interface Props {
    params: Promise<{ slug: string[] }>;
    searchParams: Promise<{ sortOrder: string}>
}
export default async function ProductsPage(props: {params: Promise<{slug: string[]}>, searchParams: Promise<{sortOrder: string}>}) {
  const slug = await (await props.params).slug;
  const sortOrder = await (await props.searchParams).sortOrder;
  return (
    <div>ProductsPage {slug} {sortOrder}</div>
  )
}
