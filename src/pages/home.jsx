import Container from '../components/container'
import Header from '../components/header'
import UserContainer from '../components/userContainer'
import UserNumbers from '../components/userNumbers'
import UserPicture from '../components/userPicture'
import UserDetails from '../userDetails'

export default function Home() {
  return (
    <Container>
      <Header />
      <UserContainer>
        <UserPicture url="https://avatars.githubusercontent.com/u/79476975?v=4" alternativeText="image" />
        <UserDetails name="Eduardo Batista Pereira" login="#eduard0bp" bio="Lorem Impsum"/>
        <UserNumbers />
      </UserContainer>
    </Container>
  )
}
