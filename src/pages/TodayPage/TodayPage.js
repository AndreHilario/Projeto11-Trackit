import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { CheckCard, TodayContainer, TodayContent, MainHeaderToday } from "./styled";
import axios from "axios";
import { URL_API } from "../../constants/urls";
import useAuthTo from "../../context/useAuthTo";

export default function TodayPage() {

    const [habitsToday, setHabitsToday] = useState([]);
    const { auth } = useAuthTo(); 

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${auth.getToken}` }
        }

        axios
            .get(`${URL_API}/habits/today`, config)
            .then((res) => {
                setHabitsToday(res.data)
            })
            .catch((err) => alert(err.response.message))
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
                            <p>Seu recorde: {h.highestSequence}</p>
                        </CheckCard>
                    )
                })}
            </TodayContent>
            <Menu />
        </TodayContainer>
    )
}