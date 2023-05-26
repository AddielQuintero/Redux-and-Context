import { State } from '@redux'
import { useSelector } from 'react-redux'

export const Sparkles = () => {
  const sparkles = useSelector((state: State) => state.sparkles)
  const sparklesArray = Array(sparkles).fill('✨')
  console.log('Render Sparkles...')

  return <p>{sparklesArray}</p>
}
