import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { HistoricContainer, HistoricContent } from "./styled";
import useAuthTo from "../../context/useAuthTo";

export default function HistoricPage() {

    const { percentage } = useAuthTo();

    return (
        <HistoricContainer>
            <Header />
            <HistoricContent>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoricContent>
            <Menu percentage={percentage}/>
        </HistoricContainer>
    )
}