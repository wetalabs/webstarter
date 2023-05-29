import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"

const components = {
  Image,
  h1:({...props}) =>(
    <h1 className='text-4xl text-black mt-12 mb-6 md:leading-loose font-medium' {...props}/>
  ),
  h2:({...props}) =>(
    <h2 className='text-3xl text-black mt-12 mb-6 md:leading-loose font-medium' {...props}/>
  ),
  h3:({...props}) =>(
    <h3 className='text-2xl text-black mt-12 mb-6 md:leading-loose font-medium' {...props}/>
  ),
  p:({...props}) =>(
    <p className='text-lg text-[#767b81] leading-loose mb-8' {...props}/>
  ),
  img:({ ...props }) =>(
    <img { ...props } className='w-full'/>
  ),
  blockquote:({ ...props }) => (
    <blockquote {...props} className="w-full text-center bg-[#eaecf0] text-xl"/>
  ),
  a:({ href='',...props }) => (
    <Link href={href} {...props} className="text-blue-600 after:content-['_↗']"/>
  ),
  table:({...props}) =>(
    <table className="table-auto" {...props}/>
  ),
  ul:({...props}) => (
    <ul className='list-disc list-inside' {...props}/>
  ),
  ol:({...props}) => (
    <ol className='list-decimal list-inside' {...props}/>
  ),
  li:({...props}) => (
    <li className='text-lg text-[#767b81] leading-relaxed mb-3' {...props} />
  ),
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}