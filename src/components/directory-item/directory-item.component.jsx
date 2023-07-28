import { useNavigate } from "react-router-dom"
import { BackgroundImage,Body,DirectoryContainer } from "./directory-item.styles"

export const DirectoryItem = ({ category }) => {
  const { imageUrl, title ,route } = category
  const navigate = useNavigate();
  

  const onNavigateHandler = ()=>navigate(route)
  return (
    <DirectoryContainer onClick={onNavigateHandler}>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }}/>
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryContainer>
  )
}

export default DirectoryItem

// import { useNavigate } from "react-router-dom";
// import { Body, DirectoryContainer } from "./directory-item.styles";

// export const DirectoryItem = ({ category }) => {
//   const { imageUrl, title, route } = category;
//   const navigate = useNavigate();

//   const onNavigateHandler = () => navigate(route);
//   return (
//     <DirectoryContainer onClick={onNavigateHandler}>
//       <img src={imageUrl} alt={title} />
//       <Body>
//         <h2>{title.toUpperCase()}</h2>
//         <p>Shop Now</p>
//       </Body>
//     </DirectoryContainer>
//   );
// };

// export default DirectoryItem;