import styled from "styled-components";

const DivStyled = styled.p`
    width: 100%;
    height: 100%;
    font-weight: 500;
`

function NoPermission(){
    return (
        <DivStyled className="no-permission">
            You have not permission for access this page!
        </DivStyled>
    )
}
export default NoPermission;