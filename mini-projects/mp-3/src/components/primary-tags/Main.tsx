import styled from 'styled-components';
import {pageSpecs} from "../../types.ts";
import Title from "../ui/Title.tsx";
// import {Title} from "../ui/Title.tsx";
// import {PageTitleType} from "../../types.ts";

const StyledMain = styled.main`
    width: 70%;
    //height: 100vh;
    padding: 1vh 1vw;
    flex: 75%;
    margin: 0 1vw;
`;

// {children}:{children: React.ReactElement}

export default function Main({props}:{props:pageSpecs}) {
    return (
        <StyledMain>
            <Title text={props.pageTitle}></Title>
            <p>{props.subtitle}</p>
        </StyledMain>
    );
}

// export default function Main({children}:{children:React.ReactNode}) {
//     return (
//         <StyledMain>
//             {children}
//         </StyledMain>
//     );
// }

// Main was always #column-right. Nav was always #column-left