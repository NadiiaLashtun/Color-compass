function DisplayColours({ color }) {
  return (
    <div className='flex gap-4'>
      <div className='text-brand-light-green w-1/5 font-semibold'>
        <p>
          {color.hex} <br /> {color.name}
        </p>
      </div>
      <div className='w-4/5'> {color.description}</div>
    </div>
  );
}

export default DisplayColours;
