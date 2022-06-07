import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom"


function UserDetail(props){
    const params = useParams()
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            .then(res => res.json())
            .then(data => {
                // 데이터 설정 및 로딩 상태 갱신
                setData(data)

            })
    }, [data])

    if(data===null) return <div>불러오는 중</div>
    
    return(
        <div>{data.id}의 이름 {data.name}</div>
    )
}

function App() {
    return (
        <Router>
            <Link ></Link>
            <Link to="/users/1">1번 유저</Link><br />
            <Link to="/users/2">2번 유저</Link><br />
            <Link to="/users/3">3번 유저</Link><br />

            <Routes>
                <Route path="/users/:userId" element={<UserDetail/>}></Route>
                
            </Routes>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))