import React from 'react'

const HomeBlogCard = (cat) => {
  return (
    <div>
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
                                className="w-full h-48 object-cover object-center group-hover:brightness-75 transition-all"
                            />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-2xl font-semibold text-white">{cat.title}</h3>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default HomeBlogCard
