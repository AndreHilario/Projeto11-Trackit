import { useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import HabistForm from "./HabitsForm";
import { HabitsContainer, MainContent, Main, MainHeader } from "./styled";

export default function HabitsPage() {

    const [newHabit, setNewHabit] = useState("");

    function createHabit() {
        setNewHabit(<HabistForm />)
    }
    
    return (

        <HabitsContainer>
            <Header />
            <Main>
                <MainHeader>
                    <h2>Meus hábitos</h2>
                    <button onClick={createHabit}>+</button>
                </MainHeader>
                <MainContent>
                    {newHabit}
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </MainContent>

            </Main>
            <Menu />
        </HabitsContainer>
    )
}