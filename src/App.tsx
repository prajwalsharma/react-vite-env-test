import "./App.css";

function App() {
  return (
    <div>
      <strong>Environment Variable :</strong> {import.meta.env.API_BASE_URL}
      <br />
      <strong>Environment :</strong> {import.meta.env.ENVIRONMENT_NAME}
    </div>
  );
}

export default App;
