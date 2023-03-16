import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { HistoricContainer, HistoricContent } from "./styled";

export default function HistoricPage() {
    return (
        <HistoricContainer>
            <Header />
            <HistoricContent>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoricContent>
            <Menu />
        </HistoricContainer>
    )
}