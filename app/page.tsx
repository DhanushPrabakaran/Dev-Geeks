import Image from "next/image";
import Header from "@/components/Header";
import Drawer from "@/components/Drawer";
import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Drawer />
      <div className="flex flex-row">
        <div className=" max-lg:hidden w-36  flex-none flex flex-col h-screen grow-0  overflow-hidden bg-base-200 mr-2">
        <Navbar/>
        </div>
        <div className=" flex-1 h-screen grow-1  overflow-y-scroll overflow-x-hidden scroll-smooth flex flex-col  ">
          <div className=" text-4xl text-center text-secondary m-4">Projects</div>

          <Container />
          <Container />
          <Container />
        </div>
        <div className=" flex flex-col h-screen overflow-hidden bg-base-200 visible max-md:hidden">
          {/* <div className=" m-1 btn-secondary ">Related Post </div>
          <div className="btn m-1">hello</div>
          <div className="btn m-1">hello</div> */}
          <ul className="menu bg-base-200 text-center w-52  rounded-box">
  <li className="menu-title text-accent text-xl ">Related post</li>
  <li className="line-clamp-3 justify-start bg-neutral rounded-md mb-1 text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing </li>
  <li className="line-clamp-3 justify-start bg-neutral rounded-md mb-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing </li>
  <li className="line-clamp-3 justify-start bg-neutral rounded-md mb-1 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing </li>
</ul>
        </div>
      </div>

      <Footer />
      {/* <CopyRight/> */}
    </main>
  );
}
