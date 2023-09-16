import Image from "next/image";
import Header from "@/components/Header";
import Drawer from "@/components/Drawer";
import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Rightbar from "@/components/Rightbar";
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
          {/* <div className=" flex justify-center flex-col  items-center   h-full">
            <h1 className=" text-center lg:text-8xl max-md:text-6xl text-4xl max-sm:text-3xl   font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-secondary via-success to-secondary ">
              WELCOME YOU ALL
            </h1>
            <h3>we are here. developers </h3>
            <div className="mockup-window border bg-base-300 w-2/3 h-2/3 ">
              <div className="flex flex-col align-middle items-center justify-center px-4 py-16 bg-base-200 h-full ">
                <div>
                  <div>Begin</div>
                  <div>
                    design your product with the help of all the contributors
                    and gater reviesws
                  </div>
                </div>

                <div>
                  <div>Begin</div>
                  <div>
                    design your product with the help of all the contributors
                    and gater reviesws
                  </div>
                </div>

                <div>
                  <div>Begin</div>
                  <div>
                    design your product with the help of all the contributors
                    and gater reviesws
                  </div>
                </div>

                <div>
                  <div>Begin</div>
                  <div>
                    design your product with the help of all the contributors
                    and gater reviesws
                  </div>
                </div>

                <div>
                  <div>Begin</div>
                  <div>
                    design your product with the help of all the contributors
                    and gater reviesws
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="hero lg:h-screen h-full bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className=" flex items-center flex-col ">
                <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-secondary via-success to-secondary ">
                  WELCOME YOU ALL
                </h1>
                <p className="py-6 text-center">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
              <div className="mockup-window border bg-base-300 w-2/3 h-2/3 ">
                <div className="flex flex-col align-middle items-center justify-center px-4 py-16 bg-base-200 h-full ">
                  <div>
                    <div className=" text-primary">Begin</div>
                    <div className=" text-secondary">
                      design your product with the help of all the contributors
                      and gater reviesws
                    </div>
                  </div>

                  <div>
                    <div>Begin</div>
                    <div>
                      design your product with the help of all the contributors
                      and gater reviesws
                    </div>
                  </div>

                  <div>
                    <div>Begin</div>
                    <div>
                      design your product with the help of all the contributors
                      and gater reviesws
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
          <div className="hero lg:h-full h-fit bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className=" flex items-center flex-col ">
                <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-secondary via-success to-secondary ">
                  WELCOME YOU ALL
                </h1>
                <p className="py-6 text-center">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
              <div className="mockup-window border bg-base-300 w-2/3 h-2/3 ">
                <div className="flex flex-col align-middle items-center justify-center px-4 py-16 bg-base-200 h-full ">
                  <div>
                    <div className=" text-primary">Begin</div>
                    <div className=" text-secondary">
                      design your product with the help of all the contributors
                      and gater reviesws
                    </div>
                  </div>

                  <div>
                    <div>Begin</div>
                    <div>
                      design your product with the help of all the contributors
                      and gater reviesws
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Rightbar /> */}
      </div>
      <Footer />
      <CopyRight />
    </main>
  );
}
