import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link';

interface Props {
  searchParams: Promise<{sortOrder: string}>
}

export default async function UsersPage(props: {searchParams: Promise<{sortOrder: string}>}) {

  var sortOrder = (await props.searchParams).sortOrder;
  return (
    <>
        <h1>Users</h1>
        <Link href="/users/new" className='btn'>New User</Link>
        <UserTable sortOrder={sortOrder}/>
    </>
  )
}