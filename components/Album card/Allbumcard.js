import "aos/dist/aos.css";
export default function Allbum(props) {
  return (
    <div

     // data-aos="flip-left"
      className=" zoo bg-red-300 p-4  min-h-[16rem] min-w-[22rem]"
    >
      <h3 className=" p-2 text-center">{props.name}</h3>
    </div>
  );
}