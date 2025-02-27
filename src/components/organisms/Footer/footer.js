
const Footer = ({ todos, handleModify, handleClear, handleDelete }) => {
  return (
    <footer
      className="p-5 shadow-lg rounded-xl mt-5 text-right"
      style={{
        backdropFilter: "blur(10px)",
        background: "linear-gradient(45deg, #ed8c1e, #d7a122, #e0ab18)",
        borderRadius: "20px",
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
      }}
    >
      <h2>🛡️ Completed Tasks: {todos.length}개</h2> {/* 완료된 작업 수 표시 */}
      <div>
        <button onClick={handleModify} id="ModifyButton">
          {" "}
          {/* 선택된 항목 수정 버튼 */}
          Modify Selected
        </button>
        <button onClick={handleDelete} id="DeleteButton">
          {" "}
          {/* 선택된 항목 삭제 버튼 */}
          Delete Selected
        </button>
        <button onClick={handleClear} id="ClearButton">
          {" "}
          {/* 모든 항목 삭제 버튼 */}
          Clear All
        </button>
      </div>
    </footer>
  );
};

export default Footer;
