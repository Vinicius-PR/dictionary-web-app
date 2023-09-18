import { NotFoundProps } from "../../App"
import { NoDefinitionContainer } from "./styles"
import sadFaceImg from '../../assets/sadFace.png'

interface NoDefinitionFoundProps {
  notFoundResult: NotFoundProps
}

export default function NoDefinitionFound({notFoundResult}: NoDefinitionFoundProps) {
  return (
    <NoDefinitionContainer>
      <img src={sadFaceImg} alt="Sad Face" />
      <h2>{notFoundResult.title}</h2>
      <p>{notFoundResult.message} {notFoundResult.resolution}</p>
    </NoDefinitionContainer>
  )
}
