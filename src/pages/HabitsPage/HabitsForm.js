import { CreateHabitMenu, DaysContainer, FormConatiner, ButtonDays, ButtonsContainer } from "./styled";
import { idDays } from "../../constants/days";
import { useState } from "react";
import axios from "axios";
import { URL_API } from "../../constants/urls";


export default function HabistForm({ setNewHabit }) {

    const [habitName, setHabitName] = useState("");
    const [selectedDay, setSelectedDay] = useState([]);
    const [disabled, setDisabled] = useState(true);

    function choseDay(id) {
        if (selectedDay.includes(id)) {
            setSelectedDay(selectedDay.filter((dayId) => dayId !== id));
        } else {
            setSelectedDay([...selectedDay, id]);
        }
    }

    function cancelNewHabit() {
        setNewHabit("")
    }

    function salveNewHabit() {
        setDisabled(true);

        const body = {
            name: habitName,
            days: selectedDay
        }

        axios
            .post(`${URL_API}`, body)
            .then()
            .catch((err) => alert(err.response.message))
    }

    return (
        <CreateHabitMenu>
            <FormConatiner>
                <input
                    placeholder="nome do hábito"
                    value={habitName}
                    onChange={(e) => setHabitName(e.target.value)}
                    disabled={disabled}
                />
            </FormConatiner>
            <DaysContainer>
                {idDays.map((day) => {
                    const select = selectedDay.includes(day.id)
                    return (
                        <ButtonDays disabled={disabled} selected={select}
                            key={day.id} onClick={() => choseDay(day.id)}>{day.name}
                        </ButtonDays>
                    )
                })}
            </DaysContainer>
            <ButtonsContainer>
                <button onClick={cancelNewHabit}>Cancelar</button>
                <button onClick={salveNewHabit}>Salvar</button>
            </ButtonsContainer>
        </CreateHabitMenu>
    )
}