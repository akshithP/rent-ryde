import React from "react";

interface Props {
  passStrength: number;
}

const PasswordStrength = ({ passStrength }: Props) => {
  return (
    <div className="mt-2 flex gap-1">
      {Array.from({ length: passStrength + 1 }).map((i, index) => (
        <div
          key={index}
          className={`h-2 w-10 rounded-md ${
            passStrength === 0 ? "bg-red-500" : ""
          }
          ${passStrength === 1 ? "bg-orange-500" : ""}
          ${passStrength === 2 ? "bg-yellow-500" : ""}
          ${passStrength === 3 ? "bg-green-500" : ""}
          }`}
        ></div>
      ))}
    </div>
  );
};

export default PasswordStrength;
