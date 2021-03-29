import React from 'react'

function Todo() {
    return (
        <div>
            
        </div>
    )
}

Todo.getInitialProps = async (props) => {
    console.log(props)
    const {id} = props.query
    try{
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => response.json())
            .then((json) => json);
    return { data };
    }catch (error) {}
};

export default Random;