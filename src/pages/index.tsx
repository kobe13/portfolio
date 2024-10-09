import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="py-20 bg-gradient-to-b from-indigo-700 to-indingo-400 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-8">
          👋 Hey there! Welcome to my portfolio! 😎
        </h1>
        <p className="text-base font-bold text-indigo-600">
          Work in progress...
        </p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>My portfolio</title>;
