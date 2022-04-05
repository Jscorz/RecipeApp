import React from "react"
import Layout from "../components/Layout"
import { page, text } from "../examples/about.module.css"

const about = () => {
  return (
    <Layout>
      <div className={page}>
        <h1>about page</h1>
        <h1>hello world</h1>
        <p className={text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ad ex,
          numquam necessitatibus voluptates repellat iure dolores dolorem unde
          recusandae praesentium qui molestiae, quaerat quasi? Ratione, aliquam
          tenetur? Voluptas libero porro voluptatum veniam, aliquam tempora
          assumenda facilis minus blanditiis amet!
        </p>
      </div>
    </Layout>
  )
}

export default about
