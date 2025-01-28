import Image from 'next/image';
import React from 'react';
import brandLogo from '../../public/images/logo.svg';
import dropdownArrow from '../../public/images/icon-arrow-down.svg';


const HeroContent = () => {
  return (
    <div className="flex items-center gap-14">
      <span>
        <Image src={brandLogo} alt="brand logo" />
      </span>
      <div>
        <ul className="flex items-center gap-10">
          <li className="flex items-center gap-2">
            <span>Features </span>
            <span>
              <Image src={dropdownArrow} alt="arrow down" />
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span>Company </span>
            <span>
              <Image src={dropdownArrow} alt="arrow down" />
            </span>
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default HeroContent;
