import React, { useContext } from "react"
import { Container } from "../components/container/styles"
import ReposContainer from "../components/reposContainer/ReposContainer"
import { context } from "../context"

const Repos = props => {
  const ctx = useContext(context)

  return (
    <Container>
      <ReposContainer name={ctx.userData?.name} repos={ctx.repos}/>
    </Container>
  )
}

export default Repos