import { Advice } from "./Components/Advice";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data, newLoad } = useFetch();

  return (
    <section className="section">
      <Advice id={data.id} advice={data.advice} newLoad={newLoad} />
    </section>
  );
}

export default App;
