import { images } from '../../../assets/asset/images';



const TalentCard = ({ talent, index }) => {
 
  const avatar = talent.avatar || images[index % images.length]; // avatar images comes from images and it will loop if images is not enough

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-200 border border-gray-200 h-full">
      
      {/* Avatar */}
      <img
        src={avatar}
        alt={talent.name}
        className="w-10 h-10  rounded-full object-cover border border-purple-500"
      />

      {/* Info */}
      <div className="mt-3 flex-1 text-center md:text-left w-full">
        <h3 className="text-lg font-semibold text-gray-800">{talent.name}</h3>
        <p className="text-gray-600">{talent.role}</p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
          {talent.skills?.map((skill, idx) => (
            <span
              key={idx}
              className="text-sm px-2 py-1 bg-purple-100 text-purple-700 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* View Profile Button */}
        <div className="mt-3">
          <button className="px-4 py-1 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
