import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
    params: Promise<{
        id: number;
    }>
}

export default async function UserDetailPage(props: {params: Promise<{id: number}>}) {
    const id = await (await props.params).id;
    if (id > 10) notFound();
    return (
    <div>UserDetailPage {id}</div>
  )
}