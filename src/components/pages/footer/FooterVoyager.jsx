import gitHubIcon from "/src/img/github.svg";
import linkedInIcon from "/src/img/linkedin.svg";

export default function FooterVoyager({ liUrl, ghUrl, voyager }) {
  return (
    <div className='flex gap-0.5 items-center md:text-nowrap'>
      <a href={liUrl}>
        <img
          className='drop-shadow-icon'
          src={linkedInIcon}
          alt='linkedin icon'
        />
      </a>
      <a href={ghUrl}>
        <img
          className='pr-0.5 drop-shadow-icon'
          src={gitHubIcon}
          alt='github icon'
        />
      </a>
      <p>{voyager}</p>
    </div>
  );
}
