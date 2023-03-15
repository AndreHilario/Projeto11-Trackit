import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { CheckCard, TodayContainer, TodayContent, MainHeaderToday } from "./styled";
import { AuthContext } from "../../constants/AuthContext";
import axios from "axios";
import { URL_API } from "../../constants/urls";

export default function TodayPage() {

    const [habitsToday, setHabitsToday] = useState([]);
     /* const { token } = useContext(AuthContext); */
     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODI4MCwiaWF0IjoxNjc4OTE5NTQ5fQ.rTzKW6npMtPEIqj0hzI0crNr-j7ZcXJGDJDqBxi5cqk'

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        axios
            .get(`${URL_API}/habits/today`, config)
            .then((res) => {
                setHabitsToday(res.data)
            })
            .catch((err) => alert(err.response))
    }, [])
    return (
        <TodayContainer>
            <Header />
            <TodayContent>
                <MainHeaderToday>
                    <h2>Segunda, 17/05</h2>
                    <p>Nenhum hábito concluído ainda</p>
                </MainHeaderToday>
                {habitsToday.map((h) => {
                    return (
                        <CheckCard>
                            <h5>{h.name}</h5>
                            <p>Sequência atual: {h.currentSequence}</p>
                            <p>Seu recorde: {h.hghestSequence}</p>
                        </CheckCard>
                    )
                })}
            </TodayContent>
            <Menu />
        </TodayContainer>
    )
}