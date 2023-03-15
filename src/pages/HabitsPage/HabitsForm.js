import {CreateHabitMenu, DaysConatiner, FormConatiner, ButtonsContainer } from "./styled";
import { idDays } from "../../constants/days";
import { useState } from "react";


export default function HabistForm() {

    const [habitName, setHabitName] = useState("");
    const [selectedDay, setSelectedDay] = useState([]);

    function choseDay(id) {
        
    }
    
    return (
        <CreateHabitMenu>
            <FormConatiner>
                <input 
                    placeholder="nome do hábito" 
                    value={habitName}
                    onChange={(e) => setHabitName(e.target.value)}
                />
            </FormConatiner>
            <DaysConatiner>
                {idDays.map((day) => <button key={day.id} onClick={() => choseDay(day.id)}>{day.name}</button>)}
            </DaysConatiner>
            <ButtonsContainer>
                <button>Cancelar</button>
                <button>Salvar</button>
            </ButtonsContainer>
        </CreateHabitMenu>
    )
}