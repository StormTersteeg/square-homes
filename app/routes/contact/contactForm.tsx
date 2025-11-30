import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, { error: "Please enter your name." }),
  email: z.email({ error: "Please enter a valid email address." }),
  message: z.string().min(5, { error: "Please enter a message." }),
});

function Form({ register, onSubmit, errors, isSending }: any) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label className="block mb-1 text-sm text-gray-300">Name</label>
        <input
          {...register("name")}
          className="w-full p-2 rounded bg-gray-800"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm text-gray-300">Email</label>
        <input
          {...register("email")}
          className="w-full p-2 rounded bg-gray-800"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm text-gray-300">Message</label>
        <textarea
          {...register("message")}
          className="w-full p-2 h-28 rounded bg-gray-800"
        ></textarea>
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        disabled={isSending}
        className="w-full bg-blue-700 hover:bg-blue-600 transition p-2 rounded font-semibold disabled:opacity-50"
      >
        Send Message
      </button>
    </form>
  );
}

function Sending() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 animate-fadeIn">
      <div className="w-10 h-10 border-4 border-gray-400 border-t-blue-600 rounded-full animate-spin mb-4"></div>
      <div className="text-gray-300 animate-pulse">Sending message...</div>
    </div>
  );
}

function Sent() {
  return (
    <div className="flex flex-col items-center justify-center h-64 animate-fadeIn">
      <div className="text-3xl mb-2">✅</div>
      <div className="text-lg font-semibold mb-1">Message Sent</div>
      <div className="text-gray-400 text-sm">
        We’ll get back to you shortly.
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const handleSend = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
    }, 1800);
  };

  return (
    <>
      {!sent && (
        <Form
          register={register}
          onSubmit={handleSubmit(handleSend)}
          errors={errors}
          isSending={isSending}
        />
      )}

      {isSending && <Sending />}

      {sent && !isSending && <Sent />}
    </>
  );
}
