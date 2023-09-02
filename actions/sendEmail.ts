"use server";

import { validateString } from "@/lib/utils";
import { Resend } from "resend";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // server side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "petertrai@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {message: message as string, 
      senderEmail: senderEmail as string})
    })
    // react: {
    //     component: <ContactFormEmail message={message} senderEmail={senderEmail}/>
    // }
    } catch (error: unknown) {
    return {
        error: getErrorMessage(error)
    }
  }

  return {
    data,
  }
};
