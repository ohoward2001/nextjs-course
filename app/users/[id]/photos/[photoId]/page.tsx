import React from 'react'

interface Props {
    params: Promise<{id: number, photoId: number}>
}
export default async function PhotoPage(props: {params: Promise<{id: number, photoId: number}>}) {
  const id = await (await props.params).id;
  const photoId = await (await props.params).photoId;
  return (
    <div>PhotoPage {id} {photoId}</div>
  )
}
