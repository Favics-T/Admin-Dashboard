function Avatar({ src, index }) {
  return (
    <div className={`${index !== 0 ? "-ml-1" : ""} rounded-full border-2 border-white`}>
      <img className="h-8 w-8 rounded-full" src={src} alt="team member" />
    </div>
  );
}

export default Avatar;
