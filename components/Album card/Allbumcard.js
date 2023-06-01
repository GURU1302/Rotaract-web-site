import "aos/dist/aos.css";


export default function Allbum(props) {
  return (
    <div

     // data-aos="flip-left"
      className=" zoo bg-red-300 min-h-[27rem] min-w-[22rem]"
    >
    <div>
    <div className="" style={{  
      backgroundColor: "#F27BB8",
      minHeight: '10rem',
    }}>
            <img src="/Flagship.jpg "></img>
     </div>
    <h3 style={{color: "#db2777"}} className=" p-2 text-center"><strong>{props.name}</strong></h3>
    <div>
    <textarea style={{resize: 'none',minHeight: '16rem', border: 'none', outline: 'none'}} className= "min-w-[22rem] bg-red-300 px-4 py-2"  rows="5" cols="25"> 
          {props.desc}
    </textarea>
    </div>
     </div>
     </div>
  );
}