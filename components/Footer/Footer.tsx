"use client";
import React, { useState, useCallback } from "react";
import Logo from "@/assets/logo.svg";
import RightArrow from "@/assets/RightArrow";
import Image from "next/image";

const debounce = (func: Function, delay: number) => {
  let timerId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeyPot, setHoneyPot] = useState("");

  const debouncedSubmit = useCallback(
    debounce(async (email: string) => {
      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setMessage("Thank you for subscribing! ");
          setEmail("");
          setShowModal(true);
        } else {
          const data = await response.json();
          setMessage(data.message || "Failed to subscribe. Please try again.");
          setShowModal(true);
        }
      } catch (error) {
        console.error("Error submitting email:", error);
        setMessage("An error occurred. Please try again.");
        setShowModal(true);
      }

      setIsSubmitting(false);
    }, 1000),
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (honeyPot) {
      setMessage("Spam detected. Please try again.");
      setShowModal(true);
      return;
    }

    setIsSubmitting(true);
    debouncedSubmit(email);
  };

  return (
    <footer className="py-12">
      <div className="w-full h-full flex flex-col-reverse lg:flex-row items-center md:justify-between gap-12">
        <div className="w-full max-w-[410px] flex flex-col items-start text-strat">
          <h2 className="text-3xl mb-2">Be notified when it's ready.</h2>
          <p className="text-[#B7B7B7] mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center lg:items-end w-full"
          >
            <input
              type="text"
              value={honeyPot}
              onChange={(e) => setHoneyPot(e.target.value)}
              className="hidden"
              aria-hidden="true"
            />
            <input
              type="email"
              placeholder="hello@node101.io"
              className="text-white mb-5 py-2 px-2 rounded-full focus:outline-none w-full bg-transparent border-[1px] border-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="w-full flex items-start">
              <button
                disabled={isSubmitting}
                type="submit"
                className="group relative inline-flex items-center px-4 py-2 rounded-full bg-transparent text-primary font-medium overflow-hidden transition-all duration-300 ease-in-out"
              >
                <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
                  Subscribe
                </span>
                <span className="ml-4 w-6 h-6 bg-primary rounded-full flex justify-center items-center transition-all duration-300 ease-in-out group-hover:bg-transparent z-[1]">
                  <RightArrow />
                </span>
                <span className="absolute top-1/2 right-7 transform -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-primary rounded-full transition-all duration-300 ease-in-out group-hover:w-[200%] group-hover:h-[200%] z-[0]" />
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col text-start md:text-end mb-12 lg:mb-0">
          <h2 className="text-5xl md:text-6xl"> CONTACT US TO</h2>
          <h2 className="text-5xl md:text-6xl text-primary italic">
            CONTRIBUTE
          </h2>

          <div className="text-gray-400 mt-4">
            <a
              className="w-fit"
              href="mailto:hello@node101.io"
            >
              hello@node101.io
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-28 mb-4">
        <a
          href="https://github.com/node101-io"
          target="_blank"
          className="text-gray-400 hover:text-white transition"
        >
          GitHub
        </a>
        <div className="flex flex-col items-end">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
          />
          <p className="text-[#B7B7B7] pt-2">
            developed and designed by node101
          </p>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#121212] text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{message}</h2>
            <button
              className="mt-4 px-4 py-2 bg-white text-black rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
