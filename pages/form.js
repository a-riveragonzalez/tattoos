import Head from "next/head";
import Layout from "../components/layout";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [tatDes, setTatDes] = useState("");
  const [approxSize, setApproxSize] = useState("");
  const [placement, setPlacement] = useState("");
  const [option, setOption] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  function handleChange(event) {
    // console.log(event.target.checked);
    switch (event.target.id) {
      case "first-name":
        setFirstName(event.target.value);
        console.log(event.target.value);
        break;
      case "last-name":
        setLastName(event.target.value);
        console.log(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        console.log(event.target.value);
        break;
      case "phone-num":
        setPhoneNum(event.target.value);
        console.log(event.target.value);
        break;
      case "tat-des":
        setTatDes(event.target.value);
        console.log(event.target.value);
        break;
      case "approx-size":
        setApproxSize(event.target.value);
        console.log(event.target.value);
        break;
      case "placement":
        setPlacement(event.target.value);
        console.log(event.target.value);
        break;
      case "option-yes":
        setOption(event.target.value);
        console.log(event.target.value);
        break;
      case "option-no":
        setOption(event.target.value);
        console.log(event.target.value);
        break;
      case "selectedFile":
        setSelectedFile(event.target.files[0]);
        console.log(event.target);
        break;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNum,
        tatDes,
        approxSize,
        placement,
        option,
      }),
    });
    if (response.ok) {
      alert("Email sent successfully!");
      // Reset form after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNum("");
      setTatDes("");
      setApproxSize("");
      setPlacement("");
      setOption(null);
      setSelectedFile(null);
    } else {
      alert("Error sending email.");
    }
  };

  return (
    <Layout form>
      <Head>
        <title>Consultation Form</title>
      </Head>
      {/* <div>
      <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="/images/"
            />
      </div> */}
      <section className="block max-w-7xl mx-auto rounded-lg bg-gray-200 p-6 shadow-lg dark:bg-neutral-700 text-white">
        <p className="text-center text-3xl">Contact Me : </p>

        <form action="#" method="POST" className="text-white">
          <div className="shadow sm:overflow-hidden sm:rounded-md ">
            {/* first name div */}
            <div className="">
              <label className="block text-sm font-medium leading-6">
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="first-name"
                value={firstName}
                onChange={handleChange}
                className="mt-2 block pl-1 w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* last name div */}
            <div className="">
              <label className="block text-sm font-medium leading-6">
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="last-name"
                value={lastName}
                onChange={handleChange}
                className="mt-2 block w-full pl-1 text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* over 18 div */}
            <div className="flex items-center py-2">
              <div
                className="text-sm font-semibold leading-6 pr-3 "
                aria-hidden="true"
              >
                Are you over 18?
              </div>

              <label className="pr-2">
                <input
                  type="radio"
                  value="yes"
                  id="option-yes"
                  className="mr-1"
                  checked={option === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  id="option-no"
                  className="mr-1"
                  checked={option === "no"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>

            {/* email div */}
            <div className="">
              <label className="block text-sm font-medium leading-6">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={handleChange}
                className="mt-2 block pl-1 w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* phone number div */}
            <div className="">
              <label className="block text-sm font-medium leading-6">
                Phone Number
              </label>
              <input
                type="text"
                name="phone-num"
                id="phone-num"
                autoComplete="phone-num"
                value={phoneNum}
                onChange={handleChange}
                className="mt-2 block pl-1 w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* tattoo description div */}
            <div className="">
              <label className="block text-sm font-medium leading-6">
                Tattoo Description
              </label>
              <input
                type="text"
                name="tat-des"
                id="tat-des"
                autoComplete="tat-des"
                value={tatDes}
                onChange={handleChange}
                className="mt-2 pl-1 block w-full text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* ?????? TO DO ??????? Upload a tattoo referecne div */}
            <div>
              <label className="block text-sm font-medium leading-6">
                Upload a tattoo referecne
              </label>
              <div className="mt-2 flex justify-center rounded-md border-2 border-dashed bg-white px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <FontAwesomeIcon
                    icon={faImage}
                    className="text-black text-3xl text-[#4f46e5]"
                  />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer rounded-md bg-white font-medium text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-gray-500">
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            {/* Approximate size div */}
            <div className="">
              <label className="block text-sm font-medium leading-6">
                Approximate size
              </label>
              <input
                type="text"
                name="approx-size"
                id="approx-size"
                autoComplete="approx-size"
                value={approxSize}
                onChange={handleChange}
                className="mt-2 block w-full pl-1 text-black rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* Placement div */}
            <div className="">
              <label className="block text-sm font-medium leading-6 ">
                Placement
              </label>
              <input
                type="text"
                name="placement"
                id="placement"
                autoComplete="placement"
                value={placement}
                onChange={handleChange}
                className="mt-2 block w-full pl-1 text-black rounded-md border-0 py-1.5 mb-5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* submit button */}
          <div className="bg-white px-4 py-3 text-center rounded-md sm:px-6 ">
            <button
              type="submit"
              onClick={handleSubmit}
              className="inline-flex justify-center rounded-md bg-gray-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>

        {/* add this after the form is submitted 
        <div> We will reach out to you as soon as possible.</div> */}
      </section>
    </Layout>
  );
}
