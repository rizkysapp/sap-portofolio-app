import { IoIosArrowRoundForward } from "react-icons/io";
import Layout from "./components/layout/Layout";
import Container from "./components/Container";
import LinkBtn from "./components/ui/LinkBtn";
import Footer from "./components/layout/footer/Footer";

export default function Home() {
  return (
    <main className="h-screen">
      <Layout>
        <Container>
          <div className="px-3 py-1 sm:px-16 sm:py-8">
            <div className="row">
              <div className="sm:col-md-12 -space-y-3 text-start">
                <h1 className="animate-charcter sm:text-[40px] text-[30px] font-josefin">
                  <span className="sm:inline-block block">I&apos;M</span> RIZKY SAPUTRA
                </h1>
                <h2 className="hidden sm:inline-block sm:text-[40px] animate-charcter font-josefin">Frontend Developer</h2>
              </div>
            </div>
            <article className="sm:w-[90%] w-full sm:mt-4 mt-1 tracking-wider sm:text-[18px] text-sm leading-loose text-gray-800 space-y-2 sm:space-y-6">
              <div>
                <p>
                  Frontend developer, and friendly JavaScript engineer in your neighborhood. I spend my days constantly digging into lines of code, adding one line of code to experience and knowledge,
                </p>
              </div>
              <div>
                <p>
                  I continue to hone, finding beauty in simplicity and order in lines of code. While creating beautiful web experiences. However you can{" "}
                  <span>
                    <LinkBtn href={"/contact"}>CONTACT ME</LinkBtn>
                  </span>
                </p>
              </div>
            </article>
            <div className="sm:mt-10 mt-7 w-[180px]">
              <LinkBtn href={"/about"} outline className="flex-start space-x-5 relative">
                <p>See More About Me</p>
                <IoIosArrowRoundForward className="absolute top-[1px] -right-[35px] sm:-right-[42px] fade-in-left" size={24} />
              </LinkBtn>
            </div>
            <div className="sm:mt-14 mt-7">
              <Footer />
            </div>
          </div>
        </Container>
      </Layout>
    </main>
  );
}
