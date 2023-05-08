import React from 'react'
import Image from 'next/image';
const projects = [
  { "name": "", "image": "/10.jpg" },
  { "name": "", "image": "/20.jpg" },
  { "name": "", "image": "/30.jpg" },
  { "name": "", "image": "/60.jpg" },
  { "name": "", "image": "/70.jpg" },
]
function index() {
  return (
    <div className="container flex flex-wrap mx-auto">
      {projects.map((project,key) => {
        return <div className="w-full p-2 rounded lg:w-1/3 md:w-1/2" key={key}>
          <Image src={project.image} width={640} height={924} 
            alt="image" />
        </div>
      })}
    </div>
  )
}

export default index
