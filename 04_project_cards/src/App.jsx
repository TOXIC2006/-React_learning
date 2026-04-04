import React from 'react'
import Cards from './componets/Cards'

export const App = () => {

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
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
      company: "Facebook",
      posted: "5 days ago",
      description: "Product Designer",
      time: "Full-Time",
      level: "Mid Level",
      salary: "$130k",
      location: "Bangalore, India",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/732/732229.png",
      company: "Amazon",
      posted: "10 days ago",
      description: "UI Designer",
      time: "Full-Time",
      level: "Senior Level",
      salary: "$120k",
      location: "Delhi, India",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png",
      company: "Netflix",
      posted: "2 days ago",
      description: "Visual Designer",
      time: "Contract",
      level: "Expert",
      salary: "$160k",
      location: "Mumbai, India",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      company: "Adobe",
      posted: "8 days ago",
      description: "Graphic Designer",
      time: "Full-Time",
      level: "Junior Level",
      salary: "$90k",
      location: "Pune, India",
    }
  ];
  return (
    <div className='parent'>
      {cardsData.map(function (cardsData, idx) {
        return <div key={idx}>
          <Cards

            image={cardsData.image}
            company={cardsData.company}
            posted={cardsData.posted}
            description={cardsData.description}
            time={cardsData.time}
            level={cardsData.level}
            salary={cardsData.salary}
            location={cardsData.location}
          />
        </div>
      })}


    </div>
  )
}
export default App
