import Head from "next/head";
import Link from "next/link";


import React from 'react'

function Todo({data}) {
    // console.log(data)
    return (
       <>
        <Head>
            <title>Micro | Random | {data.title} </title>
        </Head>

        <main className="container mt-12 mx-auto">
            <h1 className="text-3xl">{data.title}</h1>
            <a>Please complate your task</a><br></br>
            <Link href="/random">
                <a>Bring me to random page</a>
            </Link>
        </main>
       </>
    );
}

Todo.getInitialProps = async (props) => {
    // console.log(props.query)
    const {id} = props.query
    try{
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => response.json())
            .then((json) => json);
    return { data };
    }catch (error) {}
};

export default Todo;