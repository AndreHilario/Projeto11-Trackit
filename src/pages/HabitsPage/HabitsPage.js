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

    const [newHabit, setNewHabit] = useState(false);
    const [habits, setHabits] = useState([]);
    const [reloadPage, setReloadPage] = useState(0);

    const { auth, percentage } = useAuthTo();

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
        setNewHabit(true)
    }

    function deleteHabits(id) {
        let mensagem = "Você realmente gostaria de apagar o hábito?"
        if (window.confirm(mensagem)) {
            axios
                .delete(`${URL_API}/habits/${id}`, config)
                .then(() => {
                    let counter = reloadPage + 1;
                    setReloadPage(counter)
                })
                .catch((err) => console.log(err.response.message))
        }
    }
    return (

        <HabitsContainer>
            <Header />
            <Main>
                <MainHeader>
                    <h2>Meus hábitos</h2>
                    <button data-test="habit-create-btn" onClick={createHabit}>+</button>
                </MainHeader>
                <MainContent>
                    {!newHabit ? "" : <HabistForm setNewHabit={setNewHabit} config={config} setReloadPage={setReloadPage} reloadPage={reloadPage} />}
                    <ContainerHabit>
                        {habits.map((habit) => {
                            return (
                                <HabitInfos data-test="habit-container" key={habit.id}>
                                    <h5 data-test="habit-name">{habit.name}</h5>
                                    <img data-test="habit-delete-btn" onClick={() => deleteHabits(habit.id)} src={trash} alt="Ícone de deletar" />
                                    <DaysContainerCreated>
                                        {idDays.map((d) => {
                                            const select = habit.days.includes(d.id)
                                            return (
                                                <ButtonDays
                                                    data-test="habit-day"
                                                    selected={select}
                                                    key={d.id}>
                                                    {d.name}
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
            <Menu percentage={percentage}/>
        </HabitsContainer>
    )
}