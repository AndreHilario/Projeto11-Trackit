import { CreateHabitMenu, DaysContainer, FormContainer, ButtonDays, ButtonsContainer, DotsLogin } from "./styled";
import { idDays } from "../../constants/days";
import { useState } from "react";
import axios from "axios";
import { URL_API } from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";
import GlobalStyle from "../../style/GlobalStyle";

export default function HabistForm(props) {

    const { setNewHabit, config, setReloadPage, reloadPage, habitName, setHabitName, selectedDay, setSelectedDay } = props;

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

    function salveNewHabit() {

        const body = {
            name: habitName,
            days: selectedDay
        }

        setDisabled(true);

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
            });

    }

    return (
        <CreateHabitMenu data-test="habit-create-container">
            <FormContainer>
                <input
                    data-test="habit-name-input"
                    placeholder="nome do hábito"
                    value={habitName}
                    onChange={(e) => {
                        setHabitName(e.target.value)
                    }}
                    disabled={disabled}
                />
            </FormContainer>
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
                <button data-test="habit-create-save-btn" onClick={salveNewHabit}>
                    {!disabled ? "Salvar" : <DotsLogin><ThreeDots color="#FFFFFF" /></DotsLogin>}
                </button>
            </ButtonsContainer>
            <GlobalStyle disabled={disabled} />
        </CreateHabitMenu>
    )
}