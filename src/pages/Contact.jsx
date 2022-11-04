import React from "react";
import ContactForm from "../components/ContactForm";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import Paragraph from "../components/Paragraph";

const Contact = () => {
  return (
    <Container>
      <section className="max-w-[720px] mx-auto my-6">
        <PageHeader text="Contact Me" />
        <Paragraph
          text="Hi there, contact me to ask me about anything you have in mind."
          className={`my-3`}
        />
        <ContactForm />
      </section>
    </Container>
  );
};

export default Contact;
