import ReactPlayer from 'react-player';

export default function VideoFullSize(videoLink) {
  return (
    <div>
      <ReactPlayer
        url={videoLink}
        controls
        light="true"
        playing
        loop
        width="100%"
        height="100%"
        // onClickPreview={handleOpenVideo}
      />
    </div>
  );
}
