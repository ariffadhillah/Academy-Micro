import React from 'react'
import Link from 'next/link'

import IconPlay from "public/images/icon-play.svg";



export default function RenderItem({ item }) {
    console.log(item)
    // const itemimga = item.slice(1,)

    return (
        <div className="w-1/3 px-2">
            <div className="item relative">
                <figure className="item-image">
                    <IconPlay></IconPlay>
                    <img src={item?.thumbnail ?? ""} alt={item?.name ?? "some information"}/>
                </figure>
                <div className="item-meta mt-2">
                    <h4 className="text-lg text-gray-900">{item?.name ?? "Curse name"}</h4>
                    <h5 className="text-sm text-gray-600">{item?.level ?? "Curse level"}</h5>
                </div>
                
                <Link href="/courses/[slug]" as={`/courses/${item.id}`}><a className="link-wrapped"></a></Link>

                {/* <Link href="/courses/[id]" as={`/courses/${item.id}`}>
                    <a className="link-wrapped"></a>
                </Link> */}
            </div>
        </div>
    )
}