import Link from "next/link";

const page = () => {
    return (
        <div className="about">
        <h1 className="heading-about">About</h1>
        <div className="flex">
        <div className="rectangle rec1 ">
            <div className="card-image"></div>
            <h1 className="card-heading">To-Do</h1>
            <h1 className="card-text">Our ToDo List can help you easily organise your day and your daily task you can add and remove any task and mark them complete when ever you have completed the task</h1>
           
           <Link href="/todo">
            <button className="btn todo">To-Do</button>
          </Link>

        </div>
        <div className="rectangle rec2">
        <div className="card-image2"></div>
            <h1 className="card-heading">Pomodoro</h1>
            <h1 className="card-text">Pomodoro can help you easily focus on any task on hand with no disturbance you can change timers and set break lengths for your pomodoro according to what you prefer</h1>
            
            <Link href="/pomo">
            <button className="btn pomo">Pomodoro</button>
            </Link>
        </div>
        <div className="rectangle rec3">

        <div className="card-image3"></div>
            <h1 className="card-heading">Chatroom</h1>
            <h1 className="card-text">Completed your entire todo list?And also used your pomodoro and now want to take a break and have a talk with someone or just get some ideas? Well then the chatroom is perfect for you.</h1>
            
            <Link href="/chat">
            <button className="btn finwal">Chat</button>
            </Link>
        </div>
        
        </div>
    </div>
    )
}   

export default page