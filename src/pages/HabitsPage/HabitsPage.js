import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import HabistForm from "./HabitsForm";
import { HabitsContainer, MainContent, Main, MainHeader, ContainerHabit, HabitInfos, DaysContainerCreated, ButtonDays } from "./styled";
import { URL_API } from "../../constants/urls";
import useAuthTo from "../../context/useAuthTo";
import axios from "axios";
import trash from "../../assets/Delete.png"
import { idDays } from "../../constants/days";

export default function HabitsPage() {

    const [newHabit, setNewHabit] = useState("");
    const [habits, setHabits] = useState([]);
    const [reloadPage, setReloadPage] = useState(0);

    const { auth } = useAuthTo();

    const config = {
        headers: { Authorization: `Bearer ${auth.getToken}` }
    }

    useEffect(() => {
        axios
            .get(`${URL_API}/habits`, config)
            .then((res) => setHabits(res.data))
            .catch((err) => console.log(err.response))
    }, [reloadPage])

    function createHabit() {
        setNewHabit(<HabistForm setNewHabit={setNewHabit} config={config} setReloadPage={setReloadPage} />)
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
                    <ContainerHabit>
                        {habits.map((habit) => {
                            return (
                                <HabitInfos key={habit.id}>
                                    <h5>{habit.name}</h5>
                                    <img src={trash} alt="Ícone de deletar" />
                                    <DaysContainerCreated>
                                        {idDays.map((d) => {
                                            return (
                                                <ButtonDays 
                                                    key={d.id}>{d.name}
                                                </ButtonDays>
                                            )
                                        })}
                                    </DaysContainerCreated>
                                </HabitInfos>
                            )
                        })}
                    </ContainerHabit>
                    {habits.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : ""}

                </MainContent>

            </Main>
            <Menu />
        </HabitsContainer>
    )
}