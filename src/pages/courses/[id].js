import Head from "next/head";
import Link from "next/link";

import courses from "src/constants/api/courses"

import React from 'react'

function DetailCourse({data}) {
    // console.log(data)
    return (
       <>
        <Head>
            <title>Micro</title>
        </Head>
        <section className="pt-10 relative overflow-hidden" style={{height: 660}}>
            
        </section>
       </>
    );
}

DetailCourse.getInitialProps = async (props) => {
    // console.log(props.query)
    const {id} = props.query
    try{
        const data = await courses.details(id)
          return { data:data.data };
    }catch (error) {}
};

export default DetailCourse;