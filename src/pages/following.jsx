import React, { useContext } from "react"
import { Container } from "../components/container/styles"
import FollowingContainer from "../components/followingContainer/FollowingContainer"
import { context } from "../context"

const Following = props => {
  const ctx = useContext(context)

  return (
    <Container>
      <FollowingContainer name={ctx.userData?.name} followings={ctx.following}/>
    </Container>
  )
}

export default Following