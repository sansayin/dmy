import { type NextPage } from "next";
import Services from "@/components/services";
import { Contact } from "@/components/contact";
import Footer from "@/components/footer";
import { useState } from "react";
import Image from 'next/image';
const Home: NextPage = () => {
  const [img, setImg] = useState("/50.jpg")
  const handleClk = (img: string) => {
    setImg("/" + img)
  }
  return (
    <section className="flex flex-row justify-between h-full">
      <div className="flex-1 basis-2/5 mt-8">
        <div className="flex flex-col h-full">
          <div className="flex-1 basis-3/5">
            <Services onClkService={(img: string) => handleClk(img)} />
          </div>
          <div className="flex-1 basis-1/5">
            <Contact />
          </div>
          <div className=" flex-1 basis-1/5 h-full ">
            <div className="flex h-full w-full  justify-center items-center">
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 basis-3/5">
        {img &&
          <Image className="rounded" width={640} height={924} src={img} alt="" />
        }
      </div>
    </section>
  )
}
export default Home
