"use client";
import { useRef } from "react";
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import Link from "next/link";
import {
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4h9ie0i",
        "template_l5iq4s4",
        form.current,
        "TEE5ZQkqnry-y19pI"
      )
      .then(
        (result) => {
            Swal.fire({
                title: 'Succses!',
                text: 'Mensaje enviado!',
                icon: 'success',
              })
        },
        (error) => {
            Swal.fire({
                title: 'Error!',
                text: 'El mensaje no se pudo enviar',
                icon: 'error',
              })
        }
      );
  };
  return (
    <section
      className="w-full flex flex-col items-center md:h-screen md:p-10 md:pr-20 p-5 md:m-0 pb-16"
      id="contact"
    >
      <h1 className="text-6xl font-bold">
        Connect whit <tag className="text-violet-800">me</tag>
      </h1>
      <div className="flex md:flex-row flex-col w-full justify-around mt-16">
        <section className="md:w-1/4">
          <div className="flex flex-col gap-10">
            <Link
              className="bg-slate-50 flex gap-5 items-center group hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              href="https://wa.me/542284572038"
            >
              <div className="bg-slate-100 h-full p-4">
                <AiOutlineWhatsApp className=" text-5xl group-hover:text-green-600 transition-all duration-200" />
              </div>
              <div className="">
                <p className="font-bold">WhatsApp</p>
                <p>+54 2284 572038</p>
              </div>
            </Link>
            <Link
              className="bg-slate-50 flex gap-5 items-center group hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              href="www.linkedin.com/in/esteban-horn-907a98206"
            >
              <div className="bg-slate-100 h-full p-4">
                <AiOutlineLinkedin className=" text-5xl group-hover:text-cyan-600 transition-all duration-200" />
              </div>
              <div>
                <p className="font-bold">Linkedin</p>
                <p>Esteban Horn</p>
              </div>
            </Link>
            <Link
              className="bg-slate-50 flex gap-5 items-center group hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              href="mailto:estebanhxrn@gmail.com"
            >
              <div className="bg-slate-100 h-full p-4">
                <AiOutlineMail className=" text-5xl group-hover:text-red-700 transition-all duration-200" />
              </div>
              <div>
                <p className="font-bold">Email Adress</p>
                <p>estebanhxrn@gmail.com</p>
              </div>
            </Link>
            <Link
              className="bg-slate-50 flex gap-5 items-center group hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              href="https://github.com/EstebanHorn"
            >
              <div className="bg-slate-100 h-full p-4">
                <AiOutlineGithub className=" text-5xl group-hover:text-gray-600 transition-all duration-200" />
              </div>
              <div>
                <p className="font-bold">GitHub</p>
                <p>Esteban Horn </p>
              </div>
            </Link>
          </div>
        </section>
        <section className="md:w-1/2 md:mt-0 mt-10 flex flex-col items-center justify-center">
          <h2 className="font-bold text-4xl">Send me a message</h2>
          <form
            className="flex flex-col gap-5 mt-5 w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <label className="flex flex-col text-lg font-bold gap-1">
              Full Name
              <input
                name="nombre"
                type="text"
                className="bg-slate-100 outline-none py-1 focus-visible:bg-slate-50 focus-visible:outline-2 focus-visible:outline-violet-800 pl-2"
              />
            </label>
            <label className="flex flex-col text-lg font-bold gap-1">
              Email
              <input
                name="email"
                type="email"
                className="bg-slate-100 outline-none py-1 focus-visible:bg-slate-50 focus-visible:outline-2 focus-visible:outline-violet-800 pl-2"
              />
            </label>
            <label className="flex flex-col text-lg font-bold gap-1">
              Message
              <input
                type="text"
                name="mensaje"
                className="bg-slate-100 outline-none py-1 focus-visible:bg-slate-50 focus-visible:outline-2 focus-visible:outline-violet-800 pl-2"
              />
            </label>
            <button
              type="submit"
              className="bg-violet-800 text-white w-20 p-2 self-end rounded-3xl hover:bg-violet-600 transition-all duration-200"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}
