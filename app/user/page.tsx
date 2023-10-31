
import Image from "next/image";
import Header from "@/components/Header";
import Drawer from "@/components/Drawer";
import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Rightbar from "@/components/Rightbar";
import ProfileForm from "@/components/ProfileForm";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Drawer />
      <div className="flex flex-row">
        <div className=" max-lg:hidden w-36  flex-none flex flex-col h-screen grow-0  overflow-hidden bg-base-200 mr-2">
          <Navbar />
        </div>
        <div className=" flex-1 h-screen grow-1  overflow-y-scroll overflow-x-hidden scroll-smooth flex flex-col  ">
          <div className=" text-4xl text-center font-extrabold font-sans text-secondary m-4">
            Profile
          </div>
          <div>
            <ProfileForm></ProfileForm>
          </div>
          {/* <form action="">
          <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
          <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
          </form> */}
        </div>
        
      </div>
      <Footer />
      <CopyRight/>
    </main>
  );
}
