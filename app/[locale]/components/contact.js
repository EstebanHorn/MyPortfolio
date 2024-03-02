"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Link from "next/link";
import {
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineGithub,
  AiFillCheckCircle,
} from "react-icons/ai";
export default function Contact({ traslation }) {
  const [sended, setSended] = useState(false);
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
            title: "Succses!",
            text: "Mensaje enviado!",
            icon: "success",
          });
          setSended(true);
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: "El mensaje no se pudo enviar",
            icon: "error",
          });
        }
      );
  };
  return (
    <section
      className="min-w-full flex flex-col items-center justify-center md:h-screen md:p-10 md:pr-20 p-5 md:my-0 my-16"
      id="contact"
    >
      <h1 className="md:text-6xl text-5xl font-normal md:text-right text-center">
        {traslation.Title1}{" "}
        <tag className="text-blue-800 font-bold">{traslation.Title2}</tag>
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
              href="https://www.linkedin.com/in/esteban-horn-907a98206"
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
                <p className="font-bold">Email</p>
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
          <h2 className="font-normal md:text-4xl text-3xl">
            {traslation.Subtitle}
          </h2>
          <form
            className="flex flex-col gap-5 mt-5 w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <label className="flex flex-col md:text-lg text-base font-bold gap-1">
              {traslation.Name}
              <input
                required
                name="nombre"
                type="text"
                className="bg-slate-100 outline-none py-1 focus-visible:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-800 pl-2"
              />
            </label>
            <label className="flex flex-col md:text-lg text-base font-bold gap-1">
              Email
              <input
                required
                name="email"
                type="email"
                className="bg-slate-100 outline-none py-1 focus-visible:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-800 pl-2"
              />
            </label>
            <label className="flex flex-col md:text-lg text-base font-bold gap-1">
              {traslation.Mesagge}
              <input
                required
                type="text"
                name="mensaje"
                className="bg-slate-100 outline-none py-1 focus-visible:bg-slate-50 focus-visible:outline-2 focus-visible:outline-blue-800 pl-2"
              />
            </label>
            {!sended ? (
              <button
                type="submit"
                className="bg-blue-800 text-white w-20 p-2 self-end rounded-3xl hover:bg-blue-600 transition-all duration-200"
              >
                {traslation.Send}
              </button>
            ) : (
              <div className="self-end ">
                <AiFillCheckCircle className=" text-5xl text-blue-800 " />
              </div>
            )}
          </form>
        </section>
      </div>
    </section>
  );
}
