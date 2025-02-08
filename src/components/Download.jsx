import { useVideo } from "../VideoContext"; 

export default function Download() {
  const { videoFile } = useVideo(); 

  console.log("Video file in Download.jsx:", videoFile); 

  const placeholderVideoUrl = "/Wildlife.mp4"; 

  const shouldShowDownloadButton = videoFile || placeholderVideoUrl;

  const shouldShowNoVideoMessage = !videoFile && !shouldShowDownloadButton;

  return (
    <div className="flex flex-col flex-grow p-10 w-full max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-2 pb-4 border-b text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 border-gray-300">
        Convert to Anti Deepfake Video
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Your video has been processed successfully!
      </p>
      <div className="bg-gray-50 p-8 rounded-xl">
        <div className="border-dashed border-8 border-gray-300 p-8 rounded-3xl flex flex-col items-center justify-center h-96">
          <video
            className="max-h-full max-w-full"
            controls
            src={
              videoFile ? URL.createObjectURL(videoFile) : placeholderVideoUrl
            }
          >
            Your browser does not support the video tag.
          </video>
          {shouldShowNoVideoMessage && (
            <p className="text-gray-500 mt-2">
              No video available for preview.
            </p>
          )}
        </div>
      </div>

      <p className="mt-2 text-xs text-gray-400">
        By downloading this video, you are agreeing to the Anti Deepfake
        Converter{" "}
        <a href="#" className="text-blue-600 underline">
          Terms of Use
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-600 underline">
          Privacy Policy
        </a>
        .
      </p>

      {shouldShowDownloadButton && (
        <div className="mt-14">
          <a
            href={
              videoFile ? URL.createObjectURL(videoFile) : placeholderVideoUrl
            }
            download={videoFile ? videoFile.name : "placeholder.mp4"}
            className="bg-gradient-to-tr from-red-500 to-purple-500 text-white px-8 py-4 rounded-full mb-4 font-bold text-xl hover:ring-4 hover:ring-offset-2 hover:ring-gradient-to-tr hover:from-red-500 hover:to-purple-500 transition-all duration-300"
          >
            Download Video
          </a>
        </div>
      )}
    </div>
  );
}
