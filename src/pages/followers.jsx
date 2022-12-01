import React, { useContext } from "react"
import { Container } from "../components/container/styles"
import FollowersContainer from "../components/followersContainer"
import { context } from "../context"

const Followers = props => {
  const ctx = useContext(context)

  return (
    <Container>
      <FollowersContainer name={ctx.userData?.name} followers={ctx.followers}/>
    </Container>
  )
}

export default Followers