import InputComponent from "../../atoms/Header/inputComponent";
import ButtonComponent from "../../atoms/Header/ButtonComponent";

const Header = ({ listInput, setListInput, handleAdd }) => {
  return (
    <header
      className="text-center p-5 rounded-xl shadow-lg"
      style={{
        backdropFilter: "blur(10px)",
        background: "linear-gradient(45deg, #ed8c1e, #d7a122, #e0ab18)",
        borderRadius: "20px",
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
      }}
    >
      <h1
        className="text-3xl font-bold"
        style={{
          animation: "glow 1.5s infinite alternate",
          textShadow: "0 0 5px #fff, 0 0 10px #ff00ff, 0 0 15px #ff00ff",
        }}
      >
        ⚛️ToDo List App⚛️
      </h1>
      <InputComponent
        value={listInput}
        onChange={(e) => setListInput(e.target.value)}
      />
      <ButtonComponent onClick={handleAdd}>추가</ButtonComponent>
    </header>
  );
};

export default Header;
