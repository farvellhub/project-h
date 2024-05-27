const container = `
    fade-out

    w-[100vw]
    h-[100vh]

    flex
    justify-center
    items-center
`;

const spinner = `
    animate-spin
    ease-in-out

    w-[50px]
    h-[50px]
    rounded-[50%]

    border-2
    border-solid
    border-gray-400
    border-t-gray-800
`;

function Loader() {
  return (
    <main className={ container }>
        <section className={ spinner }></section>
    </main>
  );
}

export default Loader;
