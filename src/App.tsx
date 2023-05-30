import "./App.css";

function App() {
  return (
    <div>
      <strong>Environment Variable :</strong> {import.meta.env.VITE_SOME_KEY}
      <strong>Environment Variable :</strong> {process.env.VITE_SOME_KEY}
    </div>
  );
}

export default App;
