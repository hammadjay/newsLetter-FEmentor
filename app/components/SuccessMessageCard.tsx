"use client";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

interface SuccessProps {
  email?: string | string[] | undefined;
}
export default function SuccessMessageCard({ email }: SuccessProps) {
  const router = useRouter();
  const returnToHome = () => {
    router.back();
  };
  return (
    <div className="bg-slate-100 w-full min-h-screen md:min-h-0 md:w-[350px] md:h-[350px] md:rounded-2xl p-4 md:p-10 flex flex-col">
      <div className="success-icon h-10 w-10 hidden md:block"></div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="success-icon h-10 w-10 mb-3 md:hidden"></div>

        <h1 className="font-bold text-[var(--dark-slate-grey)] text-3xl">
          Thanks for subscribing!
        </h1>
        <p className=" text-xs text-[var(--dark-slate-grey)]">
          A confirmation has been sent to <b>{email}</b>. Please open it and
          click the button inside to confirm your subscription.
        </p>
      </div>
      <div className="">
        <CustomButton title={"Dismiss Message"} onClick={returnToHome} />
      </div>
    </div>
  );
}
