import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function goToConvert() {
    navigate("/convert");
  }
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center font-DMSans">
        <section className="flex justify-between items-center py-10 bg-white px-8 max-w-[80%] h-[78vh] mx-auto">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Anti-Deepfake Converter</span> - protect your video fast.
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              Secure your video content with our advanced anti-deepfake
              technology. <br />
              No special skills needed. Just upload and let the system safeguard
              your media.
            </p>
            <button
              onClick={goToConvert}
              className="bg-gradient-to-tr from-red-500 to-purple-500 text-white px-8 py-4 rounded-full mb-4 font-bold text-xl hover:ring-4 hover:ring-offset-2 hover:ring-gradient-to-tr hover:from-red-500 hover:to-purple-500 transition-all duration-300"
            >
              Upload your video
            </button>
          </div>

          <div className="relative">
            <div className="flex justify-end">
              <img
                src="/media.jpg"
                alt="Video Thumbnail"
                className="rounded-md w-[576px]"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-tr from-purple-400 via-pink-500 to-purple-500 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">
            How to protect your videos from deepfakes.
          </h2>

          <div className="flex justify-center space-x-8">
            <div className="bg-white rounded-xl p-6 text-black shadow-lg w-80 flex items-start">
              <img
                src="/upload-icon.png"
                alt="Step 1"
                className="w-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  1. Upload your video.
                </h3>
                <p className="text-sm">
                  Select a video from your device that you want to protect.{" "}
                  <br />
                  Ensure your content is safeguarded from manipulation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-black shadow-lg w-80 flex items-start">
              <img
                src="/convert-icon.png"
                alt="Step 2"
                className="w-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">2. Convert securely.</h3>
                <p className="text-sm">
                  Our advanced system will convert your video using
                  anti-deepfake technology, ensuring it can&apos;t be misused to
                  create fake content.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-black shadow-lg w-80 flex items-start">
              <img
                src="/share-icon.png"
                alt="Step 3"
                className="w-12 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">3. Download & Share</h3>
                <p className="text-sm">
                  Instantly download your secured video and share it with
                  confidence, knowing it’s protected against deepfake
                  manipulation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
