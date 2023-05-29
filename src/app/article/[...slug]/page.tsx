import { notFound } from "next/navigation"
import { allArticles } from "contentlayer/generated"
import { Metadata } from "next"
import { Mdx } from "@/components/MDXComponents"


interface ArticleProps {
  params: {
    slug: string[]
  }
}

async function getArticleFromParams(params: ArticleProps["params"]) {
  const slug = params?.slug?.join("/")
  const article = allArticles.find((article: { slugAsParams: string }) => article.slugAsParams === slug)

  if (!article) {
    null
  }

  return article
}

export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata> {
  const article = await getArticleFromParams(params)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.description,
  }
}

export async function generateStaticParams(): Promise<ArticleProps["params"][]> {
  return allArticles.map((article: { slugAsParams: string }) => ({
    slug: article.slugAsParams.split("/"),
  }))
}

export default async function ArticlePage({ params }: ArticleProps) {
  const article = await getArticleFromParams(params)

  if (!article) {
    notFound()
  }

  return (
    <>
      <div className='relative h-[500px] w-full mx-auto my-0'>
        <div className='md:max-w-5xl bg-white px-8 py-9 z-10 absolute bottom-0 md:left-1/4 md:right-1/4 rounded-tl-[16px] rounded-tr-[16px]'>
          <div className='text-black md:leading-sung text-4xl md:text-5xl text-center font-fontTheme mt-4 md:mt-9'>
            {article.title}
          </div>
        </div>
      </div>
             
     
      <div className='bg-[#f9f9fb] mt-10'>
        <div className='md:max-w-5xl mx-auto py-8 px-6 md:px-0'>
          <Mdx code={article.body.code} />
        </div>
      </div>
    </>
  )
}