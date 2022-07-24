import React, { useEffect, useState } from "react";
import Panel from "../components/Panel";
import MoneyForm from "../components/MoneyForm";
import MoneyList from "../components/MoneyList";
import { useAuth } from '../contexts/AuthContext';
import { collection, query, onSnapshot, where, doc, orderBy } from "firebase/firestore";
import { db } from '../firebase'


function HomeScreen() {
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth();
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (currentUser) {
                try {
                    const q = query(collection(db, "records"), where('user', "==", doc(db, "users", currentUser.uid)), orderBy("date", "desc"));
                    //实时数据库
                    return onSnapshot(q, (querySnapshot) => {
                        let data = []
                        querySnapshot.forEach((doc) => {
                            data.push({ id: doc.id, ...doc.data() })
                        });
                        setRecords(data)
                        setLoading(false)
                    });
                } catch (e) {

                } finally {
                    setLoading(false)
                }
            }
        }
        fetchData();
    }, [currentUser]);

    if (currentUser) {
        return (
            <div>
                <Panel />
                <hr />
                <MoneyForm />
                <MoneyList records={records} loading={loading} />
            </div>
        )
    } else {
        return (
            <h2>You must log in</h2>
        )
    }
}

export default HomeScreen