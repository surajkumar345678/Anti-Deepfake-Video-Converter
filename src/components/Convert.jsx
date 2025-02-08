import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

export default function Convert() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const navigate = useNavigate(); 

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "video/*": [], 
    },
    onDrop: (acceptedFiles) => {
        const videoFile = acceptedFiles[0];
        console.log(videoFile); 
      setSelectedFile(acceptedFiles[0]);
      handleFileUpload(acceptedFiles[0]); 
    },
  });

  const handleFileUpload = (file) => {
    console.log(file);
    const totalSize = file.size;
    const chunkSize = totalSize / 100; 

    let uploaded = 0;
    const interval = setInterval(() => {
      uploaded += chunkSize;
      const progress = Math.min((uploaded / totalSize) * 100, 100);
      setUploadProgress(progress);

      if (progress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsProcessing(true); 
          handleProcessing(); 
        }, 1000); 
      }
    }, 200); 
  };

  const handleProcessing = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5; 
      setProcessingProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        navigate("/download", { state: { videoFile: selectedFile } }); 
      }
    }, 500); 
  };

  return (
    <div className="flex flex-col flex-grow p-10 w-full max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-2 pb-4 border-b text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 border-gray-300">
        Convert to Anti Deepfake Video
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Convert your video in seconds with our free online tool.
      </p>

      <div className="bg-gray-50 p-8 rounded-xl">
        <div
          {...getRootProps()}
          className={`border-dashed border-8 border-gray-300 p-8 rounded-3xl flex flex-col items-center cursor-pointer justify-center h-96 ${
            isDragActive ? "bg-gray-100" : ""
          }`}
        >
          <input {...getInputProps()} />

          {uploadProgress > 0 && uploadProgress < 100 ? (
            <div className="flex flex-col items-center justify-center h-full w-full">
              <h3 className="text-lg font-bold text-gray-600 mb-4">Uploading...</h3>
              <div className="w-3/4 bg-gray-200 rounded-full h-6">
                <div
                  className="bg-blue-600 h-6 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">{uploadProgress.toFixed(2)}%</p>
            </div>
          ) : isProcessing ? (
            <div className="flex flex-col items-center justify-center h-full w-full">
              <h3 className="text-lg font-bold text-gray-600 mb-4">Processing...</h3>
              <div className="w-3/4 bg-gray-200 rounded-full h-6">
                <div
                  className="bg-blue-600 h-6 rounded-full"
                  style={{ width: `${processingProgress}%` }}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">{processingProgress}% Completed</p>
            </div>
          ) : !selectedFile ? (
            <>
              <img
                className="pb-4 mb-4 h-48"
                src="/video-upload-icon.svg"
                alt="Upload Icon"
              />
              <h2 className="text-2xl font-bold text-gray-800">
                Drag and drop a video or{" "}
                <span className="text-blue-600 underline">browse</span>
              </h2>
              <p className="text-md text-gray-500">File size can be up to 1MB</p>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full">
              <h3 className="text-lg font-bold text-gray-600 mb-4">
                Video uploaded.
              </h3>
              <p className="text-sm text-gray-500">{selectedFile.name}</p>
            </div>
          )}
        </div>
      </div>

      <p className="mt-2 text-xs text-gray-400">
        By uploading your image or video, you are agreeing to the Anti Deepfake
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
    </div>
  );
}
