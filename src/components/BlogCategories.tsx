const categories = [
    {
        title: "Technology",
        image: "https://img.freepik.com/free-vector/metaverse-technology-concept-flat-people-with-virtual-reality-goggles-ai-robot-office_88138-1707.jpg?t=st=1745340814~exp=1745344414~hmac=148591b05b77edcee5184561eb3887e09a0d2a0cf53f80139e3d46d686d1893b&w=1380",
    },
    {
        title: "Travel",
        image: "https://t4.ftcdn.net/jpg/05/74/63/01/360_F_574630104_9ELwdUITAynD9Cf98jIQvLk2oL87Ve8Y.jpg",
    },
    {
        title: "Food",
        image: "https://design4users.com/wp-content/uploads/2023/03/food-illustration-by-helen-lee.jpg",
    },
    {
        title: "Lifestyle",
        image: "https://blogarchive.goodillustration.com/wp-content/uploads/2019/05/soho-1.jpg",
    },
    {
        title: "Education",
        image: "https://media.istockphoto.com/id/1330902575/vector/back-to-school-concept.jpg?s=612x612&w=0&k=20&c=xrrrBt0WhLG1BRjCoUurBncbDmM-vnokQ83sPgVcX5Y=",
    },
    {
        title: "Health",
        image: "https://img.freepik.com/free-vector/flat-hand-drawn-people-meditating-illustration_23-2148906112.jpg?w=1380",
    },
    {
        title: "Finance",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYs7uDuQtret-Yk48eaRvWjVlLuC8AY-XpAzljDi0RGHnK3g2JGtQa7DL_7wIjsZzmIRo&usqp=CAU",
    },
    {
        title: "Productivity",
        image: "https://img.freepik.com/free-vector/time-management-concept-landing-page_52683-24900.jpg?w=1380",
    },
];


export default function CategoryCards({ onSelect }) {
    return (
        <div className="container mx-auto px-5 py-20">
            <div className="">
                <h1 className='text-5xl text-gray-900 font-semibold pb-10'>Categories</h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((cat) => (
                    <div
                        key={cat.title}
                        onClick={() => onSelect?.(cat.title)}
                        className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 group"
                    >
                        <div className="relative">
                            {/* Image with full overlay */}
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-64 object-cover object-center group-hover:brightness-75 transition-all"
                            />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-2xl font-semibold text-white">{cat.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


