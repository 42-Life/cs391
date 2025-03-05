import styled from "styled-components";
// { children }: { children: React.ReactNode }
// {props}: {props: React.ReactNode}

export const TwoColumnLayout = styled.div`
    display: flex;
    flex-direction: row;
`;

// export default function TwoColumnLayout({children} : {children: React.ReactNode}) {
//     return (
//         <TwoCol>{children}</TwoCol>
//     );
// }