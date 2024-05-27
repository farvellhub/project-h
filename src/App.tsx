import { Loader } from "./components";
import useLoaded from "./hooks/useLoaded";

function App() {
  const loaded = useLoaded();

  return (
    loaded ? (
      <>
        <section className="w-[100vw] h-[100vh] flex justify-center items-center fade-in">
          <h1 className="text-gray-800/90 text-3xl">Hello World</h1>
        </section>
      </>
    ) : (
      <>
        <Loader />
      </>
    )
  );
}

export default App;
