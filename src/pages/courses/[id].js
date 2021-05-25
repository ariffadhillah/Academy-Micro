import Head from "next/head";
import Link from "next/link";

import courses from "src/constants/api/courses"

import Youtube from 'react-youtube'

function DetailCourse({data}) {
    console.log(data)
    return (
       <>
        <Head>
            <title>Micro</title>
        </Head>
        <section className="pt-10 relative overflow-hidden" style={{height: 660}}>
            {
                data?.chapters?.[0]?.lessons?.[0]?.video && 
                <div className="video-wrapper">
                    <Youtube 
                        videoId={data?.chapters?.[0]?.lessons?.[0]?.video}
                        id={data?.chapters?.[0]?.lessons?.[0]?.video}
                        opts={{
                            playerVars: {
                                loop: 1,
                                mute: 1,
                                autoplay: 1,
                                controls: 0,
                                showinfo: 0
                            }
                        }}
                        onEnd={(event) => {
                            event.target.playVideo();
                        }}
                    ></Youtube>
                </div>
            }                
        </section>
       </>
    );
}

DetailCourse.getInitialProps = async (props) => {
    const { id } = props.query;
    try {
      const data = await courses.details(id);
  
      return { data };
    } catch (error) {}
  }; 

  export default DetailCourse;