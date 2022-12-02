import { Section, Title, ListOfFollowersContainer, Followers, Button } from './FollowersContainerStyle'
import {AiFillCaretLeft} from 'react-icons/ai'
import { useHistory } from 'react-router-dom'

const FollowersContainer = props => {
  const history = useHistory()
  const handleOnClick = route => history.push(route)
  return (
    <Section>
      <Button onClick={() => handleOnClick('/')}>
        <AiFillCaretLeft size={25} />
      </Button>
      <Title>Seguidores de {props.name?.split(' ')[0]}</Title>
      <ListOfFollowersContainer>
        {(props?.followers).map(follows => (
          <Followers
            onClick={() => window.location.href(follows?.followers_url)}
            key={follows?.id}
          >
            <a href={follows?.html_url} target="_blank" rel='noreferrer'>
              <h2>{follows?.login}</h2>            
            </a>
          </Followers>
        ))}
      </ListOfFollowersContainer>
    </Section>
  )
}

export default FollowersContainer
