import { Section, Title, ListOfReposContainer, Repo, Button } from './ReposContainerStyle'
import { AiFillCaretLeft } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'

const ReposContainer = props => {
  const history = useHistory()
  const handleOnClick = route => history.push(route)
  return (
    <Section>
      <Button onClick={() => handleOnClick('/')}>
        <AiFillCaretLeft size={25} />
      </Button>
      <Title>Repositórios de {props.name?.split(' ')[0]}</Title>
      <ListOfReposContainer>
        {(props?.repos).map(repo => (
          <Repo
            onClick={() => window.location.href(repo?.html_url)}
            key={repo?.id}
          >
            <a href={repo?.html_url} target="_blank" rel='noreferrer'>
              <h2>{repo?.name}</h2>
            </a>
            <p>{repo?.description}</p>
          </Repo>
        ))}
      </ListOfReposContainer>
    </Section>
  )
}

export default ReposContainer
