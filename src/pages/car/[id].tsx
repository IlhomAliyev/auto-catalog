import { useRouter } from "next/router";

const CarPage = () => {
  const { push, replace } = useRouter();

  return (
    <div>
      <h1>CarPage</h1>
      <button onClick={() => push("/")}>Go Home (push)</button>
      <button onClick={() => replace("/")}>Go Home (replace )</button>
    </div>
  );
};

export default CarPage;
