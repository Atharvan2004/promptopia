import Feed from "@components/Feed"
import Nav from "@components/Nav"
import { Suspense } from "react"

const Home = () => {
  return (
    <Suspense fallback={<div>Loading.....</div>}>

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
    </Suspense>

  )
}

export default Home