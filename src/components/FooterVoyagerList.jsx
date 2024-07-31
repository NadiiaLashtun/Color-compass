import FooterVoyager from "./FooterVoyager";

function FooterVoyagerList({ title = "", listName }) {
  return (
    <div className='flex-none w-44 text-secondary-dark gap-1'>
      {title ? <p className='text-brand-red'> {title}</p> : ""}
      {listName.map((dev, index) => (
        <FooterVoyager
          liUrl={dev.liUrl}
          ghUrl={dev.ghUrl}
          voyager={dev.name}
          key={index}
        />
      ))}
    </div>
  );
}

export default FooterVoyagerList;
