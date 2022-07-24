import React from 'react';
import Panel from "../components/Panel";
import MoneyForm from "../components/MoneyForm";
import MoneyList from "../components/MoneyList";

function HomeScreen() {
    return (
        <>
            <Panel />
            <hr />
            <MoneyForm />
            <MoneyList />
        </>
    )
}

export default HomeScreen