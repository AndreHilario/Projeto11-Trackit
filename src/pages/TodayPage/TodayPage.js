import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { CheckCard, TodayContainer, TodayContent, MainHeaderToday } from "./styled";
import axios from "axios";
import { URL_API } from "../../constants/urls";
import useAuthTo from "../../context/useAuthTo";
import check from "../../assets/Check.png";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function TodayPage() {

    const [habitsToday, setHabitsToday] = useState([]);
    const [percentage, setPercentage] = useState(0);
    const { auth } = useAuthTo();

    const today = dayjs().locale("pt-br").format("dddd, DD/MM");
    const showToday = today.charAt(0).toUpperCase() + today.slice(1);
    let repetitions = 0;

    const config = {
        headers: { Authorization: `Bearer ${auth.getToken}` }
    }

    useEffect(() => {

        axios
            .get(`${URL_API}/habits/today`, config)
            .then((res) => {
                setHabitsToday(res.data)
                res.data.forEach((value) => {
                    if (value.done === true) {
                        repetitions++;
                    } else {
                        setPercentage(0)
                    }
                });
                setPercentage((repetitions / res.data.length) * 100)
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
                    setPercentage((repetitions + 1) / newHabitsToday.length * 100);
                })
                .catch((err) => alert(err.response.message))
        }
        if (check === true) {
            axios
                .post(`${URL_API}/habits/${id}/uncheck`, {}, config)
                .then(() => {
                    setHabitsToday(newHabitsToday)
                    setPercentage((repetitions) / newHabitsToday.length * 100);
                })
                .catch((err) => alert(err.response.message))
        }

    }
    return (
        <TodayContainer>
            <Header />
            <TodayContent>
                <MainHeaderToday percentage={percentage !== 0 ? 1 : 0}>
                    <h2 data-test="today">{showToday}</h2>
                    <p data-test="today-counter">{percentage !== 0 ? `${percentage.toFixed(0)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</p>
                </MainHeaderToday>
                {habitsToday.map((h) => {
                    console.log(h)
                    return (
                        <CheckCard data-test="today-habit-container" key={h.id} concluded={h.done}>
                            <h5 data-test="today-habit-name">{h.name}</h5>
                            <p data-test="today-habit-sequence">Sequência atual: {h.currentSequence}</p>
                            <p data-test="today-habit-record">Seu recorde: {h.highestSequence}</p>
                            <span data-test="today-habit-check-btn" onClick={() => checkHabit(h.done, h.id)}>
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