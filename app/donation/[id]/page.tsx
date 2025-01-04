import React from 'react'
const Page = ({ params }: { params: {id: string}}) => {
    const  id  = params.id
    // const { id: paramId } = params
  return (
    <div>{id}</div>
  )
}

export default Page
