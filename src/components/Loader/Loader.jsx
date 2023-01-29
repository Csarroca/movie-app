const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="loading-indicator">
        <img
          src="/images/spinner.gif"
          alt="Loading..."
          height={40}
          width={40}
        />
      </div>
    )
  );
};

export default Loader;
