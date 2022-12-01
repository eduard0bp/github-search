import { Section, Title, ListOfFollowersContainer, Followers } from './styles'

const FollowersContainer = props => {
  return (
    <Section>
      <Title>Seguidores de {props.name?.split(' ')[0]}</Title>
      <ListOfFollowersContainer>
        {(props?.followers).map(follows => (
          <Followers
            onClick={() => window.location.href(follows?.followers_url)}
            key={follows?.id}
          >
            <h2>{follows?.login}</h2>
          </Followers>
        ))}
      </ListOfFollowersContainer>
    </Section>
  )
}

export default FollowersContainer
