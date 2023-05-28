"use client";
import Image from "next/image";
import iconList from "../assets/icon-list.svg";
import CustomButton from "./CustomButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";

const newsLetterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});
export default function NewsLetterCard() {
  const router = useRouter();

  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      router.push(`/success?email=` + formik.values.email);
    },
    validationSchema: newsLetterSchema,
  });

  return (
    <div className="bg-slate-100 w-full min-h-screen md:min-h-0 md:w-[650px] md:h-[450px] md:rounded-2xl pb-4 md:p-4 md:grid md:grid-cols-2">
      <div className="illustration-mobile h-[284px] md:hidden"></div>
      <div className="flex justify-center items-center px-3">
        <div>
          <h1 className="text-[var(--dark-slate-grey)] text-center text-4xl font-bold my-3">
            Stay Updated!
          </h1>
          <p className="text-xs my-2">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="flex items-center my-2">
            <Image className=" inline-block" src={iconList} alt={""} />
            <p className="text-xs text-[var(--dark-slate-grey)] ">
              &nbsp; Product discovery and building what matters
            </p>
          </div>
          <div className="flex items-center my-2">
            <Image className=" inline-block" src={iconList} alt={""} />
            <p className="text-xs text-[var(--dark-slate-grey)] ">
              &nbsp; Measuring to ensure updates are a success
            </p>
          </div>
          <div className="flex items-center my-2">
            <Image className=" inline-block" src={iconList} alt={""} />
            <p className="text-xs text-[var(--dark-slate-grey)] ">
              &nbsp; And much more!
            </p>
          </div>
          <div className="mt-3">
            <div className="flex justify-between">
              <label className=" text-xs" htmlFor="email">
                Email Address
              </label>
              <label
                className=" text-xs font-bold text-[var(--primary-tomato)]"
                htmlFor="emailError"
              >
                {submitted && formik.errors.email && "Valid Email Required"}
              </label>
            </div>
            <input
              className={`p-3 w-full rounded-md border border-[var(--grey)] text-xs ${
                submitted && formik.errors.email && "errorInput"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <CustomButton
            title={"Subscribe to monthly newsletter"}
            onClick={() => {
              setSubmitted(true);
              formik.handleSubmit();
            }}
          />
        </div>
      </div>
      <div className="illustration"></div>
    </div>
  );
}
