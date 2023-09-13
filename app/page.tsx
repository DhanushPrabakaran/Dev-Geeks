import Image from "next/image";
import Header from "@/components/Header";
import Drawer from "@/components/Drawer";
import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import  Container  from "@/components/Container";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Drawer />
      <div className="grid-cols-12 gap-1 grid">
        <div className="lg:col-span-2 col-span-3 flex flex-col h-screen overflow-hidden bg-base-200">
          <div className="btn m-1">hello</div>
          <div className="btn m-1">hello</div>
          <div className="btn m-1">hello</div>
        </div>
        <div className="lg:col-span-8 col-span-6   h-screen overflow-y-scroll  ">
          <div
          className="text-4xl text-center m-4">
            Projects
          </div>
          <div
          className="bg-base-200 hover:border hover:bg-base-100 hover:border-stone-500 w-full h-fit mt-2 p-2">
            <h1
            className=" text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem unde fuga consectetur quis et.
            </h1>
            <p
            className=" text-neutral-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in deleniti magnam exercitationem nobis! Minima laboriosam labore maxime nostrum suscipit explicabo obcaecati, temporibus fuga fugiat dignissimos voluptates quod quaerat magni!
            </p>
            <div
            className=" w-full flex justify-end">
              
              <div
              className="btn bg-black m-1  py-0 mr-3 mb-2 text-xl">
              view
              </div>
            </div>
          </div>
          <Container/>
          <Container/>
          <Container/>
        </div>
        <div className="lg:col-span-2  col-span-3 flex flex-col h-screen overflow-hidden bg-base-200">
          <div className="btn m-1">hello</div>
          <div className="btn m-1">hello</div>
          <div className="btn m-1">hello</div>
        </div>
      </div>
      
      <Footer/>
      {/* <CopyRight/> */}
    </main>
  );
}
