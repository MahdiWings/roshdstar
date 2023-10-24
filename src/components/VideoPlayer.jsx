// import React, { useRef } from 'react';

// function VideoPlayer({ videoLink }) {
//   const videoRef = useRef(null);

//   const handlePlay = () => {
//     videoRef.current.play();
//   };

//   const handlePause = () => {
//     videoRef.current.pause();
//   };

//   return (
//     <div className="relative w-full max-w-xl mx-auto">
//       <video ref={videoRef} className="w-full" controls={false}>
//         <source src={videoLink} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="bg-gray-800 text-white p-2 text-center">
//         <button
//           onClick={handlePlay}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//         >
//           Play
//         </button>
//         <button
//           onClick={handlePause}
//           className="bg-red-500 hoverbg-red-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Pause
//         </button>
//         {/* Add more custom controls with Tailwind CSS classes */}
//       </div>
//     </div>
//   );
// }

// export default VideoPlayer;
