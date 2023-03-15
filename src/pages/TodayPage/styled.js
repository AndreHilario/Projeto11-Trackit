import styled from "styled-components";

export const TodayContainer = styled.div`
    background-color: #E5E5E5;
    height: 1000px;
`;

export const TodayContent = styled.main`
    display: flex;
    flex-direction: column;
    margin-left: 17px;
`

export const CheckCard = styled.div`
    background-color: #FFFFFF;
    width: 340px;
    height: 94px;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    color: #666666;
    h5 {
        font-size: 20px;
        margin-top: 13px;
        margin-left: 15px;
        margin-bottom: 7px;
    }
    p {
        font-size: 13px;
        margin-left: 15px;
    }
`

export const MainHeaderToday = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 91px;
    margin-bottom: 28px;
    h2 {
        font-family: 'Lexend Deca', sans-serif;
        color: #126BA5;
        font-size: 26px;
    }
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #BABABA;
        margin-top: 7px;
    }
`