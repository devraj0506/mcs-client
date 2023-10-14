const JoinUsCard = (data) => {
 const {pos,heading,detail,due,penalties} = data.data
  return (
    <>
     
     <div className="relative ">
        <div className="absolute back-gradient p-3 rounded-xl top-0 left-5 ">
          <span className="text-xl font-bold text-white ">{pos}</span>
        </div>
        <div className="shadow-md shadow-slate-400 px-6 py-12 lg:mx-10 rounded-xl bg-white">
          <div className="text-center">
            <p className="text-lg font-bold">{heading} </p>
            <p className="font-semibold text-slate-500 mt-2">
              {detail}
            </p>
          </div>
          <div className="bg-slate-100 rounded-xl p-1 flex justify-between mt-4 lg:px-6 py-5">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-sky-600">Due date</p>
              <p>{due} </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-red-600">Penalty fees</p>
             { penalties.map((penalty,index)=>{
              return(
               <p key={index}>{penalty}</p>
               )
             })}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUsCard;
