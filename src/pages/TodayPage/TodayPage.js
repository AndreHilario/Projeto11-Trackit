import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { CheckCard, TodayContainer, TodayContent, MainHeaderToday, Sequence, Record } from "./styled";
import axios from "axios";
import { URL_API } from "../../constants/urls";
import useAuthTo from "../../context/useAuthTo";
import check from "../../assets/Check.png";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function TodayPage({ percentage, setPercentage }) {

    const [habitsToday, setHabitsToday] = useState([]);
    const { auth } = useAuthTo();

    const today = dayjs().locale("pt-br").format("dddd, DD/MM");
    const showToday = today.charAt(0).toUpperCase() + today.slice(1);

    const config = {
        headers: { Authorization: `Bearer ${auth.getToken}` }
    }

    useEffect(() => {
        let total = 0;
        let doneTrue = 0;

        habitsToday.forEach((check) => {
            total++
            { check.done && doneTrue++ }
        })
        const percentageUpdated = doneTrue / total * 100;
        setPercentage(percentageUpdated)
    }, [habitsToday])

    useEffect(() => {

        axios
            .get(`${URL_API}/habits/today`, config)
            .then((res) => {
                setHabitsToday(res.data)
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
                <MainHeaderToday percentage={percentage !== 0 ? 1 : 0}>
                    <h2 data-test="today">{showToday}</h2>
                    <p data-test="today-counter">{percentage !== 0 ? `${percentage.toFixed(0)}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</p>
                </MainHeaderToday>
                {habitsToday.map((h) => {
                    console.log(h)
                    return (
                        <CheckCard data-test="today-habit-container" key={h.id} concluded={h.done}>
                            <h5 data-test="today-habit-name">{h.name}</h5>
                            <p data-test="today-habit-sequence">Sequência atual: <Sequence concluded={h.done}>{h.currentSequence} dias</Sequence></p>
                            <p data-test="today-habit-record">Seu recorde: <Record record={h.currentSequence === h.highestSequence && h.done}>{h.highestSequence} dias</Record></p>
                            <div data-test="today-habit-check-btn" onClick={() => checkHabit(h.done, h.id)}>
                                <img src={check} />
                            </div>
                        </CheckCard>
                    )
                })}
            </TodayContent>
            <Menu percentage={percentage} />
        </TodayContainer>
    )
}