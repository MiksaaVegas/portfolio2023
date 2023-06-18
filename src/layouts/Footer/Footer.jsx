import './Footer.css'

export default function Footer(){
  const date = new Date

  return (
    <footer>
      <p>&copy; {date.getFullYear()} All Rights Reserved</p>
    </footer>
  )
}