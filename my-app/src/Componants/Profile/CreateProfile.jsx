import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useImageContext } from "../ImageContext";

function CreateProfile() {
  const [image, setImage] = useState(""); // State for the image
  const [location, setLocation] = useState(""); // State for the location
  const [reason, setReason] = useState(""); // State for the reason
  const navigation = useNavigate(false)
 
 
  // Function to handle image upload
  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
     

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  // Function to handle location input change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Function to handle reason selection
  const handleReasonSelection = (reasonText) => {
    setReason(reasonText);
  };

  const handleCreateProfile = () => {
    // Redirect to home page component
    navigation("/home");
  };

  return (
    <div className="bg-white sm:mx-32 lg:mx-32 xl:mx-72">
      <div className="flex justify-between container mx-auto">
        <div className="w-full">
          <div className="mt-2 px-4">
            <h1 className="text-3xl text-bold font-semibold py-7 px-5">
              Welcome! Let's create your profile
            </h1>
            <h1 className="font-light py-0 px-5">
              Let others get to know you better! You can do it later
            </h1>
            <h1 className="text-2xl font-semibold py-7 px-5">Add an avatar</h1>
            <div className="flex items-center gap-10">
              <div className="relative rounded-full overflow-hidden w-32 h-32 bg-gray-200 border border-dotted border-gray-400">
                <img
                  className="object-cover w-full h-full "
                  src={image || "data:image/jpeg;base64,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"}
                  alt="Uploaded Image"
                />
              </div >
              <label
                htmlFor="image-upload"
                className="block py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-pink-500 border border-gray-400 rounded-lg hover:bg-pink-300"
              >
                Choose Image
              </label>
              <input
                id="image-upload"
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-semibold py-7 px-5">Add Location</h1>
      <div className="px-5">
        <input
          type="text"
          name="location"
          id="location"
          className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
          placeholder="Enter your Location"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <h1 className="text-2xl font-semibold py-7 px-5">
        What brings you to Dribble?
      </h1>
      <h1 className="font-light py-0 px-5">
              Select the optin thst best describr you. Don't worry, you can explore other optin later.
            </h1>
      <div className="flex justify-between mt-8 px-5 space-x-9">
        <div className="w-1/3" onClick={() => handleReasonSelection("Looking to share my work")}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-red-700">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/free-vector/connecting-teams-concept-landing-page_23-2148292731.jpg?size=626&ext=jpg&ga=GA1.1.1842360913.1712299243&semt=ais"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-ms tracking-tight text-gray-900 dark:text-white">
                Looking to share my work
              </h5>
            </div>
          </div>
        </div>
        <div className="w-1/3" onClick={() => handleReasonSelection("I'am looking to hire a designer")}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-red-700">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/free-vector/qa-engineer-composition-with-programming-coding-symbols-flat-vector-illustration_1284-78159.jpg?size=626&ext=jpg"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-ms tracking-tight text-gray-900 dark:text-white">
                I'am looking to hire a designer
              </h5>
            </div>
          </div>
        </div>
        <div className="w-1/3" onClick={() => handleReasonSelection("I'am looking for designer inspiration")}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-red-700">
            <img
              className="rounded-t-lg"
              src="https://img.freepik.com/premium-vector/programmer-job-character-with-laptop-development-application-with-coding-process_40876-1610.jpg?size=626&ext=jpg&ga=GA1.1.1842360913.1712299243&semt=ais"
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-sm tracking-tight text-gray-900 dark:text-white">
                I'am looking for designer inspiration
              </h5>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-medium text-center mt-8">
              Anything else? You can select multiple
      </h1>
      
      <div className="pt-9 pb-10">
      
        <button onClick={handleCreateProfile} type="button" className="block mx-auto py-2.5 px-8 text-sm font-medium text-white focus:outline-none bg-pink-500 border border-gray-400 rounded-lg hover:bg-pink-300">
          Create Profile
        </button>
        <h1 className=" text-center text-xm mt-4">
              Anything else? You can select multiple
      </h1>
      </div>
    </div>
  );
}

export default CreateProfile;
