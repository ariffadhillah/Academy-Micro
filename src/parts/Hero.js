import React from 'react'

export default function Hero() {
    function submit() {

    }

    return (
        <div className="flex justify-between items-center">
            <div className="w-1/2">
                <h1 className="text-5xl text-white mb-5">
                    <span className="text-teal-400">The New</span> Way to Achieve Good{" "}
                    <span className="text-teal-400">Skills</span>
                </h1>
                <p className="text-white text-lg mb-8">We provide tons pathskill that you <br />can choose and focus on</p>

                <form onSubmit={submit}></form>
                <input type="email" className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2" placeholder="Your email addres"/>
                <buttom className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">Daftar Now</buttom>
            </div>
        </div>
    )
}
