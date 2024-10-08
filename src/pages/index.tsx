import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
      <main className="flex justify-center flex-col text-center p-20">
        <h1 className="mt-4 mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          My portfolio 😎
        </h1>
          <span className="text-base font-semibold text-indigo-600">work in progress...</span>
      </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>My portfolio</title>
