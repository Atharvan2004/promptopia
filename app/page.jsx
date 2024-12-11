import Feed from "@components/Feed"
import Nav from "@components/Nav"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <Nav/>
        <h1 className="head_text text-center">
            Discover & Share 
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> AI-powered Prompts</span>
        </h1>
        <p>
            Promptopia is a open-source tool for prompts.
        </p>
        <Feed/>
    </section>

  )
}

export default Home