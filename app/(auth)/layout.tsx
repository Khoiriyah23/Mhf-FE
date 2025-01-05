"use client";
import React, { useState } from "react";
import Image from "next/image";
import authImage from "../../public/images/auth.jpeg";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div
                className={`flex flex-col md:flex-row w-full md:w-4/5 h-full md:h-4/5 rounded-lg overflow-hidden ${
                    imageLoaded ? "bg-white" : ""
                }`}
            >
                {/* Left side: Full-height image */}
                <div className="relative flex-1 w-full h-96 md:h-full">
                    <Image
                        src={authImage}
                        alt="Auth Illustration"
                        layout="fill"
                        objectFit="cover"
                        priority
                        onLoadingComplete={handleImageLoad}
                    />
                </div>

                {/* Right side: Subroutes (conditionally render after image load) */}
                <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-8">
                    {!imageLoaded ? (
                        <div className="loader">Loading...</div>
                    ) : (
                        children
                    )}
                </div>
            </div>
        </div>
    );
}
