

const MainContainer = ({ children }) => {
  return (
    <main
      className="p-5 shadow-lg rounded-xl mt-5"
      style={{
        backdropFilter: "blur(10px)",
        background: "linear-gradient(45deg, #ed8c1e, #d7a122, #e0ab18)",
        borderRadius: "20px",
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
      }}
    >
      {children}
    </main>
  );
};

export default MainContainer;
