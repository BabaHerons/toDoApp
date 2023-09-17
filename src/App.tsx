import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <section className="flex flex-col justify-between h-[100vh]">
      <section>
        <Header />
        <Main />
      </section>
      <Footer />
    </section>
  )
}

export default App
