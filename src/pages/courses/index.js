import Head from 'next/head'
import Link from 'next/link'

function Random( {data} ) {
 return (
        <>
            <Head>
                <title>Academy | Random</title>
            </Head>

            <main className="container mt-12 mx-auto ">
                <h1 className="text-3xl">
                    Fetching random word
                </h1>
                <ul>
                {data.map((todo) => {
                        return (
                            <li key={todo.id} className="border border-indigo-700 p-4">
                                {todo?.title ?? "-"}{" "}
                                <Link href="/random/[id]" as={`/random/${todo.id}`}>
                                    <a>Launch</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </>
    );
}

Random.getInitialProps = async () => {
    try{
        const data = await fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => json);
    return { data };
    }catch (error) {}
};

export default Random;