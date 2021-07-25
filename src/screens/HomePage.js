import ReactPlayer from 'react-player';

export default function HomePage() {
  const videoUrl = 'Castle-29224.mp4';
  const fullVideoUrl = `${process.env.REACT_APP_API_FILE_STORAGE_URL}/${videoUrl}`;

  return (
    <div>
      <div className="relative m-auto w-full md:w-4/5 bg-gray-200 rounded-xl">
        <h1 className="font-primary absolute text-white text-2xl md:text-8xl text-center transform  left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 ">
          Visitez des sites virtuellement !
        </h1>
        <ReactPlayer
          url={fullVideoUrl}
          controls
          playing
          loop
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
