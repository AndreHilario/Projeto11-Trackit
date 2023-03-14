import styled from "styled-components";

export const HabitsContainer = styled.div`
    background-color: #E5E5E5;
    height: 1000px;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 91px;
    h2 {
        font-family: 'Lexend Deca', sans-serif;
        color: #126BA5;
        font-size: 26px;
        margin-left: 17px;
    }
    button {
        width: 40px;
        height: 35px;
        border: 1px solid #52B6FF;
        background-color: #52B6FF;
        border-radius: 5px;
        margin-right: 18px;
        font-weight: bold;
        text-align: center;
        font-size: 27px;
        color: #FFFFFF;
    }   
`;
export const MainContent = styled.div`
    width: 338px;
    height: 74px;
    margin: 0 auto;
    margin-top: 20px;
    p {
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        line-height: 23px;
        margin-top: 29px;
    } 
`

export const CreateHabitMenu = styled.div`
    background-color: #FFFFFF;
    height: 180px;
    border-radius: 5px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    position: relative;
`
export const FormConatiner = styled.div`
    margin-top: 18px;
    margin-left: 19px;
`
export const DaysConatiner = styled.div`
    display: flex;
    gap: 10px;
    margin-left: 19px;
    button {
        width: 30px;
        height: 30px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        background-color: #FFFFFF;
        color: #DBDBDB;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 176px;
    margin-top: 30px;
    
    position: absolute;
    right: 16px;
    bottom: 23px;
    
    button:nth-child(1) {
        width: 69px;
        height: 20px;
        background-color: #FFFFFF;
        color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        border: 1px solid #FFFFFF;
    }

    button:nth-child(2) {
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        border: 1px solid #52B6FF;
        border-radius: 5px;
        margin-top: 5px;
    }
`