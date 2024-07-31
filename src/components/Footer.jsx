import React from "react";
import Wrapper from "./Wrapper";
import FooterVoyagerList from "./FooterVoyagerList";
import { TEAMLIST } from "./data/team.js";

function Footer() {
  return (
    <footer className='bg-primary-white'>
      <div className='flex justify-center flex-wrap p-4 text-primary-dark'>
        Check out our team's
        <a
          className='pl-1.5 underline cursor-pointer transition-all duration-500 hover:text-brand-red hover:drop-shadow-link'
          href='https://github.com/chingu-voyages/v49-tier2-team-16'
        >
          Github Repository
        </a>
      </div>
      <div className='bg-primary-color'>
        <Wrapper>
          <div className='flex flex-wrap justify-center xl:items-center gap-4 p-1.5 lg:px-2.5 mb-4'>
            {TEAMLIST.map((list, index) => (
              <FooterVoyagerList
                title={list.title}
                listName={list.name}
                key={index}
              />
            ))}
          </div>
        </Wrapper>
      </div>
    </footer>
  );
}

export default Footer;

/* <div className='lg:flex w-full grid grid-cols-3 gap-4 p-1.5 lg:px-2.5'>
<div className='flex flex-wrap justify-start items-center gap-4 p-1.5 lg:px-2.5'>*/
