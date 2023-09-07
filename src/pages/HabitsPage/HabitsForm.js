import { CreateHabitMenu, DaysContainer, FormContainer, ButtonDays, ButtonsContainer, DotsLogin } from "./styled";
import { idDays } from "../../constants/days";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import GlobalStyle from "../../style/GlobalStyle";
import { usePostHabits } from "../../hooks/api/useHabits";
import useAuthTo from "../../context/useAuthTo";

export default function HabistForm(props) {

    const { setNewHabit, setHabits, habits, habitName, setHabitName, selectedDay, setSelectedDay } = props;
    const { createHabit } = usePostHabits();
    const { auth } = useAuthTo();

    const [disabled, setDisabled] = useState(false);

    function choseDay(id) {
        if (selectedDay.includes(id)) {
            setSelectedDay(selectedDay.filter((dayId) => dayId !== id));
        } else {
            setSelectedDay([...selectedDay, id]);
        }
    }

    function cancelNewHabit(e) {
        e.preventDefault();
        setNewHabit(false);
        return false;
    }

    async function salveNewHabit() {

        const body = {
            name: habitName,
            days: selectedDay
        }

        setDisabled(true);

        try {
            await createHabit(auth.getToken, body);
            setDisabled(false);
            setHabitName("");
            setSelectedDay([]);
            setNewHabit(false);
            const newHabit = { name: habitName, days: selectedDay };
            setHabits([...habits, newHabit]);
        } catch (error) {
            setDisabled(false);
            alert("Algo deu errado ao criar, tente criar novamente");
        }
    }

    return (
        <CreateHabitMenu data-test="habit-create-container">
            <FormContainer>
                <input
                    data-test="habit-name-input"
                    placeholder="nome do hábito"
                    value={habitName}
                    onChange={(e) => setHabitName(e.target.value)}
                    disabled={disabled}
                />
            </FormContainer>
            <DaysContainer>
                {idDays.map((day) => {
                    const select = selectedDay.includes(day.id);
                    return (
                        <ButtonDays
                            data-test="habit-day"
                            disabled={disabled}
                            selected={select}
                            key={day.id}
                            onClick={() => choseDay(day.id)}>
                            {day.name}
                        </ButtonDays>
                    )
                })}
            </DaysContainer>
            <ButtonsContainer disabled={disabled}>
                <button data-test="habit-create-cancel-btn" onClick={cancelNewHabit}>Cancelar</button>
                <button data-test="habit-create-save-btn" onClick={salveNewHabit}>
                    {!disabled ? "Salvar" : <DotsLogin><ThreeDots color="#FFFFFF" /></DotsLogin>}
                </button>
            </ButtonsContainer>
            <GlobalStyle disabled={disabled} />
        </CreateHabitMenu>
    )
}