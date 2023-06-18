import './Badge.css'

export default function Badge(props){
  const { text, color } = props
  const style = {
    backgroundColor: color
  }

  return <span className='badge' style={style}>{text}</span>
}