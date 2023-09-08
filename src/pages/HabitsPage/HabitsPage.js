import { useEffect, useState } from "react";
import trash from "../../assets/Delete.png";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { idDays } from "../../constants/days";
import useAuthTo from "../../context/useAuthTo";
import { useDeleteHabits, useGetHabits } from "../../hooks/api/useHabits";
import HabistForm from "./HabitsForm";
import { ButtonDays, ContainerHabit, DaysContainerCreated, HabitInfos, HabitsContainer, Main, MainContent, MainHeader } from "./styled";

export default function HabitsPage() {

    const [newHabit, setNewHabit] = useState(false);
    const [habits, setHabits] = useState([]);
    const [selectedDay, setSelectedDay] = useState([]);
    const [habitName, setHabitName] = useState("");

    const { auth, percentage } = useAuthTo();
    const { getHabits } = useGetHabits();
    const { deleteHabit } = useDeleteHabits();


    useEffect(() => {
        async function fetchData() {
            try {
                const res = await getHabits(auth.getToken);
                setHabits(res);
            } catch (error) {
                alert("Erro ao carregar os seus hábitos!");
            }
        }
        fetchData();
    }, [getHabits, auth.getToken, habits, newHabit]);

    function createHabit() {
        setNewHabit(true);
    }

    async function deleteHabitsById(id) {
        let mensagem = "Você realmente gostaria de apagar o hábito?";
        if (window.confirm(mensagem)) {
            try {
                await deleteHabit(auth.getToken, id);
                setHabits([...habits]);
            } catch (error) {
                alert("Erro ao deletar este hábito!");
            }
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
                    {!newHabit ?
                        "" :
                        <HabistForm
                            setNewHabit={setNewHabit}
                            setHabits={setHabits}
                            habits={habits}
                            habitName={habitName}
                            setHabitName={setHabitName}
                            selectedDay={selectedDay}
                            setSelectedDay={setSelectedDay}
                        />
                    }
                    <ContainerHabit>
                        {habits.map((habit) => {
                            return (
                                <HabitInfos data-test="habit-container" key={habit.id}>
                                    <h5 data-test="habit-name">{habit.name}</h5>
                                    <img data-test="habit-delete-btn" onClick={() => deleteHabitsById(habit.id)} src={trash} alt="Ícone de deletar" />
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
            <Menu percentage={percentage} />
        </HabitsContainer>
    )
}