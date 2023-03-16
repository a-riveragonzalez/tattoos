import Head from "next/head";
import Layout from "../components/layout";
import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);

  function handleChange(event) {
    console.log(event.target.checked);
    switch (event.target.id) {
      case "form-name":
        setName(event.target.value);
        break;
      case "form-email":
        setEmail(event.target.value);
        break;
      case "form-message":
        setMessage(event.target.value);
        break;
      case "form-checkbox":
        setChecked(event.target.checked);
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

        <div className="">Contact Me : </div>

        <form action="#" method="POST">
          <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div class="">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div class="flex items-center py-2">
              <div
                class="text-sm font-semibold leading-6 text-gray-900 pr-3 "
                aria-hidden="true"
              >
                Are you over 18?
              </div>

              <input
                id="push-nothing"
                name="push-notifications"
                type="radio"
                class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                for="push-nothing"
                class="ml-3 block text-sm font-medium leading-6 text-gray-900 pr-3 "
              >
                Yes
              </label>

              <input
                id="push-nothing"
                name="push-notifications"
                type="radio"
                class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                for="push-nothing"
                class="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                No
              </label>
            </div>

            <div class="">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div class="">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div class="">
              <label
                for="street-address"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Tattoo Description
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

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
