import React from "react";

interface Props {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<Props>> = ({ name, message, email }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>{message}</p>
    </>
  );
};
