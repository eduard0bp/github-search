import {
  Section,
  Title,
  ListOfFollowingContainer,
  Following,
  Button
} from './FollowingContainerStyle'
import { useHistory } from 'react-router-dom'
import { AiFillCaretLeft } from 'react-icons/ai'

const FollowingContainer = props => {
  const history = useHistory()
  const handleOnClick = route => history.push(route)
  return (
    <Section>
      <Button onClick={() => handleOnClick('/')}>
        <AiFillCaretLeft size={25} />
      </Button>
      <Title>Pessoas que {props.name?.split(' ')[0]} está seguindo</Title>
      <ListOfFollowingContainer>
        {(props?.followings).map(following => (
          <Following
            onClick={() => window.location.href(following?.following_url)}
            key={following?.id}
          >
            <a href={following?.html_url} target="_blank" rel="noreferrer">
              <h2>{following?.login}</h2>
            </a>
          </Following>
        ))}
      </ListOfFollowingContainer>
    </Section>
  )
}

export default FollowingContainer
