import styled from 'styled-components';
import {pageSpecs} from "../../types.ts";
import {PageTitle, StyledSubtitle} from "../ui/StyledText.tsx";
import {Image} from "../ui/Image.tsx";
import {ImageHolder} from "../ui/StyledDivs.tsx";

const StyledMain = styled.main`
    width: 70%;
    //height: 100vh;
    padding: 1vh 1vw;
    flex: 75%;
    margin: 0 1vw;
`;

export default function Main({props}:{props:pageSpecs}) {
    function otherInfo() {
        return( (props.hasImage) ? <p>{props.subtitle}</p> :
            <ImageHolder><Image src={props.imageSource} alt={props.imageAlt}></Image></ImageHolder> )
    }

    function hasSubtitle() {
        return (props.subtitle != null ? <StyledSubtitle>{props.subtitle}</StyledSubtitle> : <></>);
    }

    return (
        <StyledMain>
            <PageTitle>{props.pageTitle}</PageTitle>
            {otherInfo()}
            {hasSubtitle()}
        </StyledMain>
    );
}