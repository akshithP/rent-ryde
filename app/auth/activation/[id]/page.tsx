import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const Activation = ({ params }: Props) => {
  return <div>{params.id}</div>;
};

export default Activation;
