import Container from "@/app/components/Container";
import Form from "@/app/components/Form";
import Layout from "@/app/components/layout/Layout";
import { HeadingPageH1 } from "@/app/components/ui/HeadingPage";
import React from "react";

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
