import React from 'react';
import { Bookmark } from 'lucide-react';

const PropsProject = () => {

    const cardsData = [
        {
            image: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png",
            company: "Google",
            posted: "30 days ago",
            description: "Graphic Designer",
            time: "Part-Time",
            level: "Flexible Schedule",
            salary: "$150-220k",
            location: "Kochi, India",
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
            company: "Microsoft",
            posted: "12 days ago",
            description: "UI/UX Designer",
            time: "Full-Time",
            level: "Senior Level",
            salary: "$140k",
            location: "Hyderabad, India",
        }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6 px-5 py-12 max-w-[1200px] mx-auto bg-gray-100 min-h-screen">

            {cardsData.map((item, idx) => (
                <div
                    key={idx}
                    className="w-[340px] bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >

                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <img
                            src={item.image}
                            alt={item.company}
                            className="h-12 w-12 rounded-full bg-gray-100"
                        />

                        <button className="flex items-center gap-1 px-3 py-2 rounded-full bg-black text-white text-xs font-medium hover:bg-gray-800">
                            Saved <Bookmark size={14} />
                        </button>
                    </div>

                    {/* Company + Time */}
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg font-bold">{item.company}</h1>
                        <span className="text-xs text-gray-400">{item.posted}</span>
                    </div>

                    {/* Role */}
                    <p className="text-xl font-bold -mt-1">{item.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        <span className="text-xs px-4 py-1 border border-gray-300 rounded-md">
                            {item.time}
                        </span>
                        <span className="text-xs px-4 py-1 border border-gray-300 rounded-md">
                            {item.level}
                        </span>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-end mt-auto pt-4">
                        <div className="flex flex-col">
                            <span className="font-semibold">{item.salary}</span>
                            <span className="text-xs text-gray-500">{item.location}</span>
                        </div>

                        <button className="px-5 py-2 rounded-xl bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition">
                            Apply now
                        </button>
                    </div>

                </div>
            ))}

        </div>
    );
};

export default PropsProject;