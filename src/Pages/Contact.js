import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import mailAnimation from "../Images/contactData.json";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const formRef = useRef(null);
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1bdq0zk",
        "template_wl6y3cr",
        formRef.current,
        "0qBTu8ki4mgmJoYkv"
      )
      .then(
        (result) => {
          console.log(result);
          toast({
            title: "Mail Sent Successfully",
            description: "I will reach out soon.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top-right",
          });
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Some error Occured",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top-right",
          });
        }
      );
  };

  return (
    <section className="min-h-[90vh] p-4 pb-6 Contact">
      <p
        className="text-3xl text-green-500 md:text-4xl font-bold text-center  py-[40px]"
        data-aos="fade-down"
      >
        Let's Connect
      </p>

      <div className="w-[90%]  m-auto md:flex gap-3">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 justify-center md:w-[50%]"
          data-aos="fade-up"
        >
          <div className="w-full flex flex-col gap-3">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleForm}
              className="text-black focus:outline-none p-2 rounded-md "
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleForm}
              className="text-black focus:outline-none p-2 rounded-md "
              placeholder="Last Name"
            />
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleForm}
            className="text-black focus:outline-none p-2 rounded-md"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleForm}
            className="text-black focus:outline-none p-2 rounded-md"
            placeholder="Message"
            required
          />
          <input
            type="submit"
            value="Send"
            className="bg-green-500 hover:bg-green-700 px-3 py-2 rounded-lg inline-block cursor-pointer"
          />
        </form>
        <div className="md:w-[50%]">
          <Lottie
            data-aos="fade-up"
            className="mx-auto"
            animationData={JSON.parse(JSON.stringify(mailAnimation))}
            style={{ width: "80%", maxWidth: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
