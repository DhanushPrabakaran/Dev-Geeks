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
      <div className="grid-cols-12 grid">
        <div className="lg:col-span-2 hidden  md:col-span-3 md:flex flex-col h-screen overflow-hidden bg-base-200 mr-2">
          <div className="btn m-1">hello</div>
          <div className="btn m-1">hello</div>
          <div className="btn m-1">hello</div>
        </div>
        <div className="lg:col-span-8  col-span-8    h-screen overflow-y-scroll overflow-x-hidden scroll-smooth flex flex-col ">
          <div
          className="text-4xl text-center m-4">
            Projects
          </div>
          
          <Container/>
          <Container/>
          <Container/>
        </div>
        <div className="lg:col-span-2  col-span-4 flex flex-col h-screen overflow-hidden bg-base-200 ">
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
