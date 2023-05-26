import { REMOVE_SPARKLE } from '@redux'
import { useDispatch } from 'react-redux'

export const Remover = () => {
  const dispatch = useDispatch()
  const handleOnclick = () => {
    dispatch({ type: REMOVE_SPARKLE })
  }

  console.log('Render Remover...')

  return (
    <div>
      <button
        onClick={handleOnclick}
        type="button"
        className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
      >
        Remover
      </button>
    </div>
  )
}
