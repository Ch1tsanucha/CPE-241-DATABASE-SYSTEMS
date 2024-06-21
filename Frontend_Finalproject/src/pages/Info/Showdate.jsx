function Time({ date, setStatus }) {
    return (
        <div className="flex flex-wrap max-w-[124px]">
            <div className="bg-white hover:bg-gray-400 text-black py-2 px-12 rounded-lg cursor-pointer"
             onClick={() => setStatus(prev => !prev)}>
                <p>{date}</p>
            </div>
        </div>
    );
}

function DayAndTime({ day, setStatus }) {
    let temp = [];
    let time = ["13.00", "14.00", "15.30", "16.30"];
    for (let i = 0; i < 4; i++) {
        temp.push(<Time key={i} date={time[i]} setStatus={setStatus} />);
    }

    return (
        <div className="flex flex-col w-3/5 mb-8  2xl:w-full">
            <div>
                <p className="text-base font-bold">{day}</p>
            </div>
            <div className="grid grid-cols-2 gap-y-4 2xl:grid-cols-4">
                {temp}
            </div>
        </div>
    );
}

export default function Show({ setStatus }) {
    let temp = [];
    let days = ["Monday 13 May", "Tuesday 14 day", "Wednesday 15 day"];
    for (let i = 0; i < 3; i++) {
        temp.push(<DayAndTime key={i} day={days[i]} setStatus={setStatus} />);
    }

    return (
        <div className="flex flex-col w-full">
            {temp}
        </div>
    );
}
