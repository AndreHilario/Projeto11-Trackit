import { CreateHabitMenu, DaysContainer, FormConatiner, ButtonDays, ButtonsContainer, DotsLogin } from "./styled";
import { idDays } from "../../constants/days";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_API } from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";

export default function HabistForm({ setNewHabit, config, setReloadPage, reloadPage }) {

    const [initialState, setInitialState] = useState({});
    const [habitName, setHabitName] = useState("");
    const [selectedDay, setSelectedDay] = useState([]);
    const [disabled, setDisabled] = useState(false);

    function choseDay(id) {
        if (selectedDay.includes(id)) {
            setSelectedDay(selectedDay.filter((dayId) => dayId !== id));
        } else {
            setSelectedDay([...selectedDay, id]);
        }
        setInitialState({ habitName, selectedDay });
    }

    function cancelNewHabit() {
        setHabitName(initialState.habitName || "");
        setSelectedDay(initialState.selectedDay || []);
        setNewHabit(false);
    }

    function salveNewHabit() {

        const body = {
            name: habitName,
            days: selectedDay
        }

        setDisabled(true);
        setInitialState({});

        axios
            .post(`${URL_API}/habits`, body, config)
            .then(() => {
                setDisabled(false)
                setHabitName("")
                setSelectedDay([])
                setNewHabit(false)
                let counter = reloadPage + 1;
                setReloadPage(counter)
            })
            .catch((err) => {
                setDisabled(false)
                alert(err.response.message)
            })
    }

    return (
        <CreateHabitMenu data-test="habit-create-container">
            <FormConatiner>
                <input
                    data-test="habit-name-input"
                    placeholder="nome do hábito"
                    value={habitName}
                    onChange={(e) => {
                        setHabitName(e.target.value)
                        setInitialState({...initialState, habitName: e.target.value})
                    }}
                    disabled={disabled}
                />
            </FormConatiner>
            <DaysContainer>
                {idDays.map((day) => {
                    const select = selectedDay.includes(day.id)
                    return (
                        <ButtonDays
                            data-test="habit-day"
                            disabled={disabled}
                            selected={select}
                            key={day.id}
                            onClick={() => {
                                choseDay(day.id)
                            }}>
                            {day.name}
                        </ButtonDays>
                    )
                })}
            </DaysContainer>
            <ButtonsContainer disabled={disabled}>
                <button data-test="habit-create-cancel-btn" onClick={cancelNewHabit}>Cancelar</button>
                <button data-test="habit-create-save-btn" onClick={salveNewHabit}>{!disabled ? "Salvar" : <DotsLogin><ThreeDots color="#FFFFFF" /></DotsLogin>}</button>
            </ButtonsContainer>
        </CreateHabitMenu>
    )
}