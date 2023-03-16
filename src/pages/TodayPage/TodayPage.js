import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { CheckCard, TodayContainer, TodayContent, MainHeaderToday } from "./styled";
import axios from "axios";
import { URL_API } from "../../constants/urls";
import useAuthTo from "../../context/useAuthTo";
import check from "../../assets/Check.png";

export default function TodayPage() {

    const [habitsToday, setHabitsToday] = useState([]);
    const [percentage, setPercentage] = useState(100);
    const { auth } = useAuthTo();

    const config = {
        headers: { Authorization: `Bearer ${auth.getToken}` }
    }

    useEffect(() => {

        axios
            .get(`${URL_API}/habits/today`, config)
            .then((res) => {
                setHabitsToday(res.data)
                console.log(res.data)
            })
            .catch((err) => alert(err.response.message))
    }, [])

    function checkHabit(check, id) {
        const newHabitsToday = habitsToday.map((habit) => {
            if (habit.id === id) {
                return {
                    ...habit,
                    done: !check,
                };
            }
            return habit;
        });
        if (check === false) {
            axios
                .post(`${URL_API}/habits/${id}/check`, {}, config)
                .then(() => {
                    setHabitsToday(newHabitsToday)
                })
                .catch((err) => alert(err.response.message))
        }
        if (check === true) {
            axios
                .post(`${URL_API}/habits/${id}/uncheck`, {}, config)
                .then(() => {
                    setHabitsToday(newHabitsToday)
                })
                .catch((err) => alert(err.response.message))
        }

    }
    return (
        <TodayContainer>
            <Header />
            <TodayContent>
                <MainHeaderToday>
                    <h2>Segunda, 17/05</h2>
                    <p>Nenhum hábito concluído ainda</p>
                </MainHeaderToday>
                {habitsToday.map((h) => {
                    console.log(h)
                    return (
                        <CheckCard key={h.id} concluded={h.done}>
                            <h5>{h.name}</h5>
                            <p>Sequência atual: {h.currentSequence}</p>
                            <p>Seu recorde: {h.highestSequence}</p>
                            <span onClick={() => checkHabit(h.done, h.id)}>
                                <img src={check} />
                            </span>
                        </CheckCard>
                    )
                })}
            </TodayContent>
            <Menu percentage={percentage} />
        </TodayContainer>
    )
}