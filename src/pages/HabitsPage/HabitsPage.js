import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { idDays } from "../../constants/days";
import { HabitsContainer, MainContent, Main, MainHeader, CreateHabitMenu, DaysConatiner, FormConatiner, ButtonsContainer } from "./styled";

export default function HabitsPage() {
    return (

        <HabitsContainer>
            <Header />
            <Main>
                <MainHeader>
                    <h2>Meus hábitos</h2>
                    <button>+</button>
                </MainHeader>
                <MainContent>
                    <CreateHabitMenu>
                        <FormConatiner>
                            <input placeholder="nome do hábito"></input>
                        </FormConatiner>
                        <DaysConatiner>
                            {idDays.map((day) => <button key={day.id}>{day.name}</button>)}
                        </DaysConatiner>
                        <ButtonsContainer>
                            <button>Cancelar</button>
                            <button>Salvar</button>
                        </ButtonsContainer>
                    </CreateHabitMenu>
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </MainContent>

            </Main>
            <Menu />
        </HabitsContainer>
    )
}