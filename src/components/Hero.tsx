import Image from '../assets/Post-pana.svg'

const Hero = () => {
    return (
        <div>
            <section className="text-gray-600 body-font ">
                <div className="container mx-auto flex px-5 lg:flex-row flex-col items-center justify-center h-screen">
                    <div className="xl:w-1/2 lg:w-1/2 w-5/6 mb-10 lg:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={Image} />
                    </div>
                    <div className="xl:flex-grow lg:w-1/2 xl:pl-24 lg:pl-16 flex flex-col lg:items-start lg:text-left items-center text-center">
                        <h1 className="title-font xl:text-6xl sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Where your stories come to life.
                        </h1>
                        <p className="mb-8 text-xl leading-relaxed">From quick thoughts to long-form pieces, Blogly helps you express, organize, and grow your voice.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-xl">Write Blog</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-xl">View Blogs</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
