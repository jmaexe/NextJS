"use client";
const Error = ({ error, reset }) => {
  return (
    <div>
      Error <button onClick={() => reset()}>try again</button>
    </div>
  );
};

export default Error;
