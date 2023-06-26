export default function Footer(){
  const date = new Date

  return (
    <footer className='bg-darkBlue text-gray-700 text-center font-geo font-normal tracking-widest pt-12 pb-4'>
      <p>&copy; {date.getFullYear()} All Rights Reserved</p>
    </footer>
  )
}