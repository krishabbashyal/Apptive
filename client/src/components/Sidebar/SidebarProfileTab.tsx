import React from 'react'
import Image from 'next/image'

const SidebarProfileTab = () => {
  return (
    <div className="w-full flex justify-center border-b border-graySeperator py-6 cursor-pointer">
      <div className="flex gap-x-3 items-center">
        <Image src="/images/profile.jpg" className="rounded-full" width={42} height={42} alt="Profile Picture" />
        <div>
          <p className="font-medium">Krishab Bashyal</p>
          <p className="text-xs -mt-0.5 text-cadetGray">Developer</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfileTab