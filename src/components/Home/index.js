
export default function Home() {
    return (
        <div className="bg-secondaryBackground relative h-height648">
            {/* particles js component */}
            {/* <ParticlesComponent id="particles"/> */}
            {/* particles js component */}

            <div className="absolute w-full">

                <div className="relative isolate">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tighter text-textColor sm:text-3xl">
                                Hi, I am Bilal Zafar. Front End Developer.
                            </h1>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <button
                                    className="uppercase text-xl py-4 pr-5 pl-5 font-bold tracking-wide bg-bgRed text-gray-100  rounded-lg  focus:outline-none focus:shadow-outline"
                                >
                                    <a href="https://github.com/BilalZafar99598" target="_blank">See My Work</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}