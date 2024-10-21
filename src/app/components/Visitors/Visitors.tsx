"use client";
import React from "react";
import { useState } from "react";

const Visitors = () => {
  return (
    <div className="flex flex-col items-center px-5 md:px-10 lg:px-20 ">
      <h1 className="text-3xl md:text-4xl lg-text-5xl font-bold italic animate-bounce text-center mt-20">
        Satisfied Visitors
      </h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <div className="flex flex-col items-center text-center">
          <img src="/images/p1.jpg" alt="img1" className="w-20 h-20 rounded-full" />
          <h2 className="text-xl font-semibold italic">Amazing Experience!</h2>
          <p>
            I just returned from a beach vacation arranged by this agency, and
            it was absolutely perfect! The accommodations were top-notch, and
            every detail was taken care of. I can't wait to plan my next trip!"
          </p>
        </div>
      

      <div className="flex flex-col items-center text-center">
        <img src="/images/p2.jpg" alt="img2" className="w-20 h-20 rounded-full" />
        <h2 className="text-xl font-semibold italic">Unforgettable Adventure!</h2>
        <p>
          "Our family trip to the mountains was unforgettable! The itinerary was
          well-planned, and the guides were knowledgeable and friendly. We felt
          safe and well-cared for the entire time. Highly recommend!"
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src="/images/p3.jpg" alt="img3" className="w-20 h-20 rounded-full" />
        <h2 className="text-xl font-semibold italic">Great Customer Service!</h2>
        <p>
          I had an excellent experience booking my travel package. The staff was
          incredibly helpful and answered all my questions promptly. They truly
          went above and beyond to ensure I had a stress-free trip!"
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src="/images/p3.webp" alt="img4" className="w-20 h-20 rounded-full" />
        <h2 className="text-xl font-semibold italic">Highly Recommend!</h2>
        <p>
          I traveled to Europe with this agency, and it exceeded my
          expectations! The tours were insightful, and the local guides were
          fantastic. I highly recommend them to anyone looking for a memorable
          travel experience."
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src="/images/p5.jpg" alt="img5" className="w-20 h-20 rounded-full" />
        <h2 className="text-xl font-semibold italic">Stress-Free Booking!</h2>
        <p>
          "I was so impressed with how easy it was to book my travel package.
          The website is user-friendly, and the customer support team was always
          available to help. I’ll definitely be using them again for my future
          travels!"
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src="/images/p6.jpg" alt="img6" className="w-20 h-20 rounded-full" />
        <h2 className="text-xl font-semibold italic">Perfect Family Getaway!</h2>
        <p>
          "Our family vacation was a dream come true! The agency customized our
          trip to fit our needs perfectly. The kids had a blast, and we made
          memories that will last a lifetime. Thank you for an amazing
          experience!"
        </p>
      </div>
    </div>
    </div>
  );
};

export default Visitors;
