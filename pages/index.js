import Link from 'next/link'

console.log(123);

export default function Home() {
  return (
    <h1 className="title">
      Read{' '}
      <Link href="/posts/first-post">
        <a>this page!</a>
      </Link>
    </h1>
  )
}
