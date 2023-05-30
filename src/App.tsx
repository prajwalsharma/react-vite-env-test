import "./App.css";

function App() {
  return (
    <div>
      <strong>Environment Variable :</strong>{" "}
      {import.meta.env.VITE_API_BASE_URL}
      <br />
      <strong>Environment :</strong> {import.meta.env.VITE_ENVIRONMENT_NAME}
    </div>
  );
}

export default App;
