import Container from "@/app/components/Container";
import Layout from "@/app/components/layout/Layout";
import { HeadingPageH1, HeadingPageH2 } from "@/app/components/ui/HeadingPage";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaBootstrap, FaCss3, FaGithub, FaGitSquare, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiJquery, SiMongodb, SiMysql, SiNextdotjs, SiTypescript } from "react-icons/si";

export const metadata: Metadata = {
  title: "Sap. | About",
  description: "Website Portfolio Sap",
};

const skillsItem = [
  { name: "Html", icon: FaHtml5 },
  { name: "Css", icon: FaCss3 },
  { name: "Javascript", icon: IoLogoJavascript },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "React", icon: FaReact },
  { name: "NextJs", icon: SiNextdotjs },
  { name: "Typescript", icon: SiTypescript },
  { name: "Git", icon: FaGitSquare },
  { name: "GitHub", icon: FaGithub },
  { name: "NodeJs", icon: FaNodeJs },
  { name: "ExpressJs", icon: SiExpress },
  { name: "Jquery", icon: SiJquery },
  { name: "Mysql", icon: SiMysql },
  { name: "MongoDb", icon: SiMongodb },
];

const About = () => {
  return (
    <Layout>
      <Container>
        <div className="px-3 py-2 sm:px-16 sm:py-8">
          <div className="flex-col justify-start sm:space-y-7 space-y-2  sm:mb-[4rem] mb-8 mt-3">
            <HeadingPageH1>About Me.</HeadingPageH1>
            <p className="tracking-wider sm:text-lg text-sm leading-loose text-gray-800">
              I always hone my skills in creating extraordinary website interfaces. A great website goes beyond the boundaries of aesthetics and dives deep into its impact to include limitless
              functionality with user-friendly navigation. Leveraging my skills as a front end developer, I have the unique ability to overcome complex technical challenges while creating websites
              that exude refinement and visual appeal. Additionally, my knowledge in recognized technical standards is complemented by my proficiency in modern building practices, ensuring that every
              aspect of your website is tuned to perfection.
            </p>
          </div>
          <div className="border-b border-2 border-gray-700"></div>
          <div className="sm:my-[4rem] my-8">
            <HeadingPageH2>Education.</HeadingPageH2>
            <div className="sm:mt-8 mt-3">
              <Link href={"https://www.kelasfullstack.id/"} className="mb-2 font-bold sm:text-lg text-sm text-gray-900 transition hover:underline underline-offset-1">
                Web Full Stack devoloper. <span className="font-medium">Codepolitan</span>
              </Link>
              <p className="tracking-wider leading-relaxed text-gray-800 text-xs sm:text-base">learning class as a full stack developer with technology that is updated to industry needs.</p>
            </div>
          </div>
          <div className="border-b border-2 border-gray-700"></div>
          <div className="sm:my-[4rem] my-8">
            <HeadingPageH2>Skills.</HeadingPageH2>
            <div className="sm:mt-8 mt-3 grid grid-rows-5 grid-flow-col gap-2 sm:gap-4 sm:space-y-3 space-y-2">
              {skillsItem?.map(({ name, icon: Icon }, i) => (
                <div key={i} className="flex-start gap-2">
                  <Icon className="text-center sm:text-xl text-sm font-medium" />
                  <span className="text-sm sm:text-lg font-normal sm:font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default About;
