import React from "react";
import { images } from "../Profile/asset/images";

const Image2 = images[1];


const Setting = () => {
  return (
    <div className="min-h-screen lato   p-6 flex justify-center">
      <div className="w-full  max-w-6xl ">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-gray-800">Setting Details</h1>
          <p className="text-sm text-[#89868D]">Update your photo and personal details here.</p>
          </div>
          
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
              Cancel
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Save
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left: Form */}
          <div className="lg:col-span-2 flex flex-col pb-44 gap-10 bg-white rounded-xl shadow p-6">
            <h2 className="text-lg border-b pb-6  Lato font-medium text-gray-800 ">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 ">
              <input type="text" placeholder="Enter first name" className="bg-[#DBDCDE] rounded-lg px-3 py-2 w-full" />
              <input type="text" placeholder="Enter last name" className="bg-[#DBDCDE] rounded-lg px-3 py-2 w-full" />
              <input type="email" placeholder="Enter email address" className="bg-[#DBDCDE] rounded-lg px-3 py-2 w-full" />
              <input type="text" placeholder="Enter user name" className="bg-[#DBDCDE] rounded-lg px-3 py-2 w-full" />
              <input type="text" placeholder="Enter phone no" className="bg-[#DBDCDE] rounded-lg px-3 py-2 w-full" />
              <input type="text" placeholder="Enter your city" className="bg-[#DBDCDE] rounded-lg px-3 py-2 w-full" />
              <input type="text" placeholder="Enter country name" className="bg-[#DBDCDE] rounded-lg px-3 py-2 w-full" />
              <input type="text" placeholder="Enter zip code" className="bg-[#DBDCDE] rounded-lg px-3 py-2 w-full" />
                        <div className="">
              <label className="text-sm text-gray-600">Bio/Write a short introduction</label>
              <select className="mt-2 bg-[#DBDCDE] rounded-lg px-3 py-2 w-full">
                <option>Normal text</option>
                <option>Rich text</option>
              </select>
            </div>
            </div>



            <div className="">
              <textarea
                rows="4"
                placeholder="Write something about yourself..."
                className="w-full bg-[#DBDCDE] rounded-lg px-3 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Timezone</label>
              <select className=" bg-[#DBDCDE] rounded-lg px-3 py-2 w-1/2">
                <option>Pacific: Standard Time</option>
                <option>GMT</option>
                <option>EST</option>
                <option>IST</option>
              </select>
            </div>
          </div>

          {/* Right: Profile */}
          <div className=" flex flex-col gap-4 space-y-6">
            <div className="flex bg-white rounded-2xl py-8 flex-col gap-6">
                {/* header */}
              <h2 className="text-lg px-2 Lato border-b border-gray-300 pb-4 font-medium text-gray-800 mb-3">Your Photo</h2>
              
              <div className="px-6 flex flex-col gap-8 ">

                {/* edit your photo */}
                <div className="flex gap-3">
                    {/* avatar */}
                    <div>
                        <img src={Image2} className="w-10 h-10" alt="" />
                    </div>

                    <div className="text-sm">
                        <h1>Edit your photo</h1>
                        <p className="text-[12px] text-[#727272]">Delete <span className="text-purple-600">Update</span></p>
                    </div>
                </div>

                {/* upload */}
                <div className="border-2 h-44 items-center flex flex-col justify-center border-purple-500 border-dashed rounded-xl p-6 text-center">
               
                <input type="file" className="hidden" id="upload-photo" />
                <label
                  htmlFor="upload-photo"
                  className="block cursor-pointer text-sm text-purple-600"
                >
                  Click to upload <span className="text-gray-600">or drag and drop </span> 
                </label>
                <p className="text-xs text-gray-400">SVG, PNG, JPG, GIF <span className="block">(max. 800x400px) </span> </p>
              </div>

              </div>
              
              
            </div>

            <div className=" bg-white rounded-2xl py-8 px-4 ">
                <div className="flex  justify-between items-center">
                    <h3 className="text-lg text-[#FF302F] font-bold">
                        <span className="text-[#3686F7]">G</span>
                        <span className="text-[#FF302F]">o</span>
                        <span className="text-[#FFBA40]">o</span>
                        <span className="text-[#3686F7]">g</span>
                        <span className="text-[#20B15A]">l</span>
                        e
                        </h3>
                     <button className="text-sm bg-purple-200 p-2 rounded-xl text-purple-600 hover:underline">
                  Connected
                </button>

                </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Use Google to sign in to your <span className="block"> account. <span className="purple">Click here to learn more</span></span> 
                </p>
              
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Setting;
