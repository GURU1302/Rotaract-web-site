import EventsCard from "../components/Eventcard";
import EventsCardRight from "../components/eventcardright";

import Footer from "../components/footer/footer";

export default function Events() {

 
  return (
    <>
      <div className=" min-h-[53rem]  min-w-[30rem]  bg-[url('../public/_MG_0041.jpg')] bg-no-repeat bg-cover ">
        <h2 className="text-white text-center text-5xl ">OUR EVENTS</h2>
      </div>
      <div className="flex flex-col gap-10 " >

        <div style={{display: 'flex', flex: 1}} className="flex flex-wrap gap-10"   >
            <EventsCard  name="Holi Mahotsav" toGayabId='togayab1' />{" "}
            <div className="bg-slate-500 min-w-[59rem] rounded" id='togayab1'>hi</div>
        </div>

        <div className="flex flex-nowrap">
        <div className="bg-slate-500 min-w-[45rem] " id='togayab5'>hi</div>
        <EventsCardRight name="Gokul Ashtami" />
        </div>

        <div style={{display: 'flex', flex: 1}} className="flex flex-wrap gap-10" >
          <EventsCard name="Fresher Night" toGayabId='togayab2' />
          <div className="bg-slate-500 min-w-[59rem] " id='togayab2'>hi</div>
        </div>
        <EventsCardRight name="Bamboozeld" />

        <div style={{display: 'flex', flex: 1}} className="flex flex-wrap gap-10">
          <EventsCard name="" toGayabId='togayab3'/>
          <div className="bg-slate-500 min-w-[59rem] " id='togayab3'>hi</div>
        </div>
        
        <EventsCardRight name="" />

        <div style={{display: 'flex', flex: 1}} className="flex flex-wrap gap-10">
          <EventsCard name="Bharat Darshan" toGayabId='togayab4'/>
          <div className="bg-slate-500 min-w-[59rem] " id='togayab4'>hi</div>
        </div>

        <EventsCardRight name="Mr & Mrs BITOTSAV" />

      </div>

      <Footer />
    </>
  );
}
