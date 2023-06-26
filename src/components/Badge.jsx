export default function Badge(props){
  const { text, color } = props
  const style = {
    backgroundColor: color
  }

  return <span className='font-geo font-bold text-badge text-gray-900 py-1 px-2 rounded-md' style={style}>{text}</span>
}