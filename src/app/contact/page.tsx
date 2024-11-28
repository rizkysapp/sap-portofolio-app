import { Metadata } from "next";
import React from "react";
import Layout from "../components/layout/Layout";
import Container from "../components/Container";
import { HeadingPageH1 } from "../components/ui/HeadingPage";
import Form from "../components/Form";

export const metadata: Metadata = {
  title: "Sap. | Contact",
  description: "Website Portfolio Sap",
};

const Contact = () => {
  return (
    <div>
      <Layout>
        <Container>
          <div className="px-3 py-1 sm:px-16 sm:py-8">
            <div className="mt-2">
              <HeadingPageH1>Contact.</HeadingPageH1>
              <h5 className="text-gray-700 text-sm mt-2">
                Get in touch or shoot me an email directly on <span className="font-medium text-gray-900">rizkysapp01@gmail.com</span>
              </h5>
            </div>
            <div>
              <Form />
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Contact;
