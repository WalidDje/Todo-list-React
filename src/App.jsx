import Title from "./components/Title"
import List from "./components/List"

function App() {

  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <Title />
        <List />
      </div>
    </div>
  )
}

export default App
