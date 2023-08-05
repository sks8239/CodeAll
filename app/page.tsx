import React from 'react'
import Link from "next/link";

type Props = {}

function Home({}: Props) {
  return <>
    <h1>Pagejsx입니다.</h1>
    <Link href="/about">
      <h1>About</h1>
    </Link>
  </>
}

export default Home