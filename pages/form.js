import Head from "next/head";
import Layout from "../components/layout";
import React, { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [tatDes, setTatDes] = useState("");
  const [approxSize, setApproxSize] = useState("");
  const [placement, setPlacement] = useState("");
  // const [age, setAge] = useState(false);
  // upload reference
  // upload placement

  function handleChange(event) {
    console.log(event.target.checked);
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
    }
  }

  function handleSubmit(event) {
    // submit to what exactly?
  }

  return (
    <Layout>
      <Head>
        <title>Consultation Form</title>
      </Head>
      <section className="block max-w-7xl mx-auto rounded-lg bg-gray-200 p-6 shadow-lg dark:bg-neutral-700">
        <p className="text-center text-3xl">Contact Me : </p>

        <form action="#" method="POST">
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            {/* first name div */}
            <div className="">
              <label
                for="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="first-name"
                value={firstName}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* last name div */}
            <div className="">
              <label
                for="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="last-name"
                value={lastName}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* ?????? TO DO ??????? over 18 div */}
            <div className="flex items-center py-2">
              <div
                className="text-sm font-semibold leading-6 text-gray-900 pr-3 "
                aria-hidden="true"
              >
                Are you over 18?
              </div>

              <input
                id="push-yes"
                name="push-age"
                type="radio"
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                for="push-yes"
                className="ml-3 block text-sm font-medium leading-6 text-gray-900 pr-3"
              >
                Yes
              </label>

              <input
                id="push-no"
                name="push-age"
                type="radio"
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                for="push-no"
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                No
              </label>
            </div>

            {/* email div */}
            <div className="">
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autocomplete="email"
                value={email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* phone number div */}
            <div className="">
              <label
                for="phone-num"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone-num"
                id="phone-num"
                autocomplete="phone-num"
                value={phoneNum}
                onChange={handleChange}
                class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* tattoo description div */}
            <div class="">
              <label
                for="tat-des"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Tattoo Description
              </label>
              <input
                type="text"
                name="tat-des"
                id="tat-des"
                autocomplete="tat-des"
                value={tatDes}
                onChange={handleChange}
                class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* ?????? TO DO ??????? Upload a tattoo referecne div */}
            <div>
              <label class="block text-sm font-medium leading-6 text-gray-900">
                Upload a tattoo referecne
              </label>
              <div class="mt-2 flex justify-center rounded-md border-2 border-dashed bg-white px-6 pt-5 pb-6">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            {/* Approximate size div */}
            <div class="">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Approximate size
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* Placement div */}
            <div class="">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Placement
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* ?????? TO DO ??????? Upload a picture of placement */}
            <div>
              <label class="block text-sm font-medium leading-6 text-gray-900">
                Upload a picture of placement
              </label>
              <div class="mt-2 flex justify-center rounded-md border-2 border-dashed bg-white px-6 pt-5 pb-6">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* submit button */}
          <div class="bg-gray-200 px-4 py-3 text-right sm:px-6 ">
            <button
              type="submit"
              class="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
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
