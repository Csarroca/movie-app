import LoaderStyled from "./LoaderStyled";

const Loader = () => {
  return (
    <LoaderStyled>
      <img
        src="/images/spinner.gif"
        alt="Loading..."
        height={200}
        width={200}
      />
    </LoaderStyled>
  );
};

export default Loader;
