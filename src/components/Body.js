import React from "react";
import video from "../assets/video.mp4";
import { AiFillAndroid, AiFillApple, AiOutlineArrowLeft } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
function Body() {
  return (
    <div className="container mx-auto flex-row mb-16 ml-12 grid lg:gap-0 gap-16 lg:grid-cols-2 w-full items-center space-x-8">
      {/* Text  */}
      <div className="items-center ">
        <h1 className="sm:text-5xl text-3xl font-bold">Gbera</h1>
        <p className="sm:w-3/4 leading-8 my-8 text-lg">
          I developed an application named "Gbera" featuring a user-friendly
          signup and login interface and Firebase. Within the app, there is a
          robust search feature that seamlessly integrates with Google Location
          Services. This functionality enables users to effortlessly input their
          desired locations, subsequently revealing a curated list of premier
          attractions, hotels, and restaurants retrieved through the Rapid API.
          Furthermore, the app facilitates streamlined booking processes,
          culminating in the generation of a QR code for confirmation purposes.
        </p>

        <div className="flex p-2 ">
          <div className="bg-[#ed017f] text-white px-8 py-3 mr-4 rounded-md cursor-pointer">
            <a
              href="https://apps.apple.com/us/app/expo-go/id982107779"
              className="flex flex-row items-center space-x-2 gap-4 text-xl "
            >
              Expo Go
              <AiFillApple size={30} />
            </a>
          </div>
          <div className="border-2 border-[#ed017f] text-black px-8 py-3 mr-4 rounded-md cursor-pointer">
            <a
              href="https://apps.apple.com/us/app/expo-go/id982107779"
              className="flex flex-row items-center space-x-2 gap-4 text-xl "
            >
              Expo Go
              <AiFillAndroid size={30} />
            </a>
          </div>
        </div>
        {/* Github link */}
        <div className="flex p-4 items-center space-x-4 ">
          <a
            href="https://github.com/tolu-og/gbera"
            target="_blank "
            rel="noopener noreferrer"
          >
            {" "}
            <FaGithub size={50} color="black" />
          </a>
          <AiOutlineArrowLeft />
          <p className="text-lg ">Code can be found here </p>
        </div>
      </div>
      {/* Screen recording  */}
      <div className="border-2 border-dotted border-[#ed017f]">
        <video
          loop
          autoPlay
          muted
          className="w-full h-[100vh] object-contain "
          src={video}
        />
      </div>
    </div>
  );
}

export default Body;
