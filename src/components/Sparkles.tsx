import { useApp } from '@context'

export const Sparkles = () => {
  const { state } = useApp()
  const sparklesArray = Array(state.sparkles).fill('✨')
  console.log('Render Sparkles...')

  return <p>{sparklesArray}</p>
}
