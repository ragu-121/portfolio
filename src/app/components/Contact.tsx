"use client";
import { ChangeEvent, useState } from "react";
import Toast from "../customComponents/Toast";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";

type Errors = {
  name?: string;
  email?: string;
};

const Contact = () => {
  const [toaststatus, setToastStatus] = useState(false);
  const [datas, setDatas] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>();
  let date = new Date();

  const validate = () => {
    let newErr: Errors = {};
    let nameRegex = /^[A-Za-z ]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(datas.name.trim())) {
      newErr.name = "Invalid Name";
    }
    if (!emailRegex.test(datas.email)) {
      newErr.email = "Invalid Email";
    }
    return newErr;
  };
  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = evt.target;
    setDatas({ ...datas, [name]: value });
  };

  const hanldeClear = () => {
    setDatas({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async () => {
    let errors = validate();
    // console.log(errors)
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      try {
        const res = await emailjs.send(
          "service_5t4b5ke",
          "template_s1hkeio",
          {
            name: datas.name,
            time: `${date.getHours()}:${date.getMinutes()}`,
            message: `Mail id : ${datas.email}\n ${datas.message}`,
          },
          "WetdwQtA0Y4kcPuJL"
        );
        if (res.status === 200) {
          setDatas({
            name: "",
            email: "",
            message: "",
          });
          setToastStatus(true);
        }
      } catch (err) {
        console.error("EmailJS Error:", err);
      }
      console.log(datas);
      setDatas({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="custom-container w-full pt-16 px-6 pb-6 flex flex-col items-center justify-center gap-6 lg:flex-row">
      {/* <div className='w-full'>
                <h2 className="text-4xl md:text-6xl font-bold">Get in touch</h2>
                <div className="pt-8">
                    <div className="">
                        <Link href='/' className="no-underline hover:underline underline-offset-2 text-sm font-medium flex items-start justify-start gap-1"><Image src='/images/linkedin_icon.svg' alt="linkedin" width={18} height={18} /> Linkedin</Link>
                    </div> 
                    <p className="text-sm font-medium my-3 flex items-center justify-start gap-1"><Image src='/images/dialer_icon.svg' alt="dialer" width={18} height={18} /> +91 88787878784</p>
                    <div className="inline-flex items-center justify-center gap-0.5 px-4 py-2 text-base bg-primary font-medium cursor-pointer">
                        <Link href='/files/dummypdf.pdf' download={true} className="">Download Resume</Link>
                    </div>
                </div>
            </div> */}
      <div className="w-full max-w-[767px]">
        <h2 className="text-center text-4xl md:text-6xl font-bold">Get in touch</h2>
        <p className="text-center text-sm leading-5 py-3">I'd love to hear from you! If you have any questions, comments, feedback, please use the form below.</p>
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-6">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="Name"
              className="text-sm font-normal mt-4 mb-2 block"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
            placeholder="Enter your name"
              type="text"
              name="name"
              id="Name"
              className="w-full h-11 rounded-lg border outline-0 px-3 hover:border-primary focus:border-primary focus:shadow-[0_0_0_0.25rem_#afef9e]"
              onChange={handleChange}
              value={datas.name}
              autoComplete="off"
            />
            {errors?.name && (
              <span className="text-red-500 text-xs font-normal">
                {errors.name}
              </span>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor="email"
              className="text-sm font-normal mt-4 mb-2 block"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
            placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
              className="w-full h-11 rounded-lg border outline-0 px-3 hover:border-primary focus:border-primary focus:shadow-[0_0_0_0.25rem_#afef9e]"
              value={datas.email}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors?.email && (
              <span className="text-red-500 text-xs font-normal">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        <label
          htmlFor="message"
          className="text-sm font-normal mt-4 mb-2 block"
        >
          Message
        </label>
        <textarea
          rows={6}
          placeholder="Enter your message"
          name="message"
          id="message"
          className="w-full rounded-lg border outline-0 p-3 resize-none hover:border-primary focus:border-primary focus:shadow-[0_0_0_0.25rem_#afef9e]"
          value={datas.message}
          onChange={handleChange}
        ></textarea>

        <div className="w-full pt-3">
          <button
            className="btn-layout bg-secondary"
            onClick={hanldeClear}
          >
            Clear All
          </button>
          <button
            className="btn-layout bg-primary ml-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      {toaststatus && (
        <Toast
          autoClose={3000}
          toastMessage="Submitted Successfully 🎈"
          onClose={(status) => {
            setToastStatus(status);
          }}
        />
      )}
    </section>
  );
};

export default Contact;
