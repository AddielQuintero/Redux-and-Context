import { Adder, Remover, Sparkles } from '@components'

export const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold py-6">Redux</h1>
        <div className="py-6">
          <Sparkles />
        </div>
        <div className="flex gap-8">
          <Adder />
          <Remover />
        </div>
      </div>
    </>
  )
}
