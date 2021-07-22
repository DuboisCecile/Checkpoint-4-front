import ReactPlayer from 'react-player';

export default function HomePage() {
  const videoUrl = 'Castle-29224.mp4';
  const fullVideoUrl = `${process.env.REACT_APP_API_BASE_URL}/file-storage/${videoUrl}`;

  return (
    <div>
      <div className="relative w-full bg-gray-200 rounded-xl">
        <h1 className="absolute text-white text-9xl text-center top-24">
          Visitez des sites virtuellement !
        </h1>
        <ReactPlayer
          url={fullVideoUrl}
          controls
          light={fullVideoUrl.preview}
          playing
          loop
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
