import "aos/dist/aos.css";
export default function Allbum(props) {
  return (
    <div

     // data-aos="flip-left"
      className=" zoo bg-red-300 p-4  min-h-[27rem] min-w-[22rem]"
    >
    <div>
    <div style={{
      backgroundColor: "#F27BB8",
      minHeight: '10rem',
    }}>
    {/* here we need to add the event image */}
     </div>
    <h3 style={{color: "#db2777"}} className=" p-2 text-center"><strong>{props.name}</strong></h3>
    <div>
    <textarea style={{resize: 'none', padding: '1rem', border: 'none', backgroundColor: "#F27BB8", outline: 'none'}} className= "rounded-lg"  rows="5" cols="25">
         Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. 
    </textarea>
    </div>
     </div>
     </div>
  );
}