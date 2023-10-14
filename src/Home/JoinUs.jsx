/* eslint-disable react/no-unescaped-entities */
import JoinUsCard from "./JoinUsCard";
const arr = [
    {
        pos:"1st",
        heading:"Commencement of business ",
        detail: "Invested shareholders must confirm payment and office address ",
        due:"Within 180 days",
        penalties:['₹50,000 for the company','₹1,000 /day for directors']
    },
    {
        pos:"2nd",
        heading:"Auditor Appointment",
        detail: "Company informs new auditor and submits ADT.1 form to ROC.",
        due:"Within 30 days ",
        penalties:['₹300 per month']
    },
    {
        pos:"3rd",
        heading:"DIN eKYC ",
        detail: "Directors share personal information for identification & verification ",
        due:"Every Year",
        penalties:['₹5000 one time']
    },
    {
        pos:"4th",
        heading:"DPT-3",
        detail: "Companies report money taken from people to ROC; auditors confirm details.",
        due:"Within 30 days",
        penalties:['₹300 per month']
    },
    {
        pos:"5th",
        heading:"MCA Form AOC-4",
        detail: "It's like an official report card for a company's documents",
        due:"On or Before 30th November ",
        penalties:['₹200 per day (No upper limit)*']
    },
    
    {
        pos:"6th",
        heading :"MCA Form MGT-7",
        detail : "Companies must annually report activities and finances to the registrar.",
        due:"On or Before 31st December",
        penalties:['₹200 per day (No upper limit)*']
    },
]


const JoinUs = () => {
    return (
        <div className="lg:mt-20 mt-8 px-8 lg:px-0 ">
           <div className="text-center ">
            <p className="lg:text-6xl font-bold">Want to  Join Us?</p>
            <p className="font-semibold text-slate-500">To remain with us, it is essential that you diligently follow the steps provided</p>    
            </div>
            <div className="mt-20 back-img">
                <div  className="grid lg:grid-cols-3 grid-cols-1 gap-14">
                {arr.map((numb)=>{
                    return(
                        <JoinUsCard key={numb} data={numb}/>   
                        
                        )
                    })
                    
                }
                </div>
            </div>
            <p className="mx-12 text-center mt-5 font-semibold">* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className="text-lg font-bold">every day </span>until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
        </div>
    );
};

export default JoinUs;