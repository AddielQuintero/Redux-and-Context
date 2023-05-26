import { useApp } from '@context'
import { ADD_SPARKLE } from '@types'

export const Adder = () => {
  const { dispatch } = useApp()

  const handleOnclick = () => {
    dispatch({ type: ADD_SPARKLE })
  }

  console.log('Render Adder...')
  return (
    <div>
      <button
        onClick={handleOnclick}
        type="button"
        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
      >
        Adder
      </button>
    </div>
  )
}
