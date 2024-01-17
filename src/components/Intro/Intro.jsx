import pfpImage from "../../assets/imgs/pfp.png";

export default function Intro() {
  return (
    <div className="flex justify-center items-center z-[3] flex-col text-slate-50 lg:max-w-[38rem] max-w-[34rem] lg:mx-[6rem] gap-[1.7rem]">
      <img
        width="140"
        height="140"
        className="rounded-full border-[3px] border-gray-50"
        src={pfpImage}
        alt="picture of myself"
      />
      <h2 className="font-medium text-xl md:text-3xl text-wrap">
        Hey!👋🏻 I'm <b>Anastasia</b>.
      </h2>
      <p className="font-medium text-lg md:text-3xl text-center !leading-[1.5]">
        I am a <b>front-end software developer</b>. My passion is crafting ideas
        into professional and beautiful{" "}
        <b>
          <em>apps</em>
        </b>{" "}
        and{" "}
        <b>
          <em>sites</em>
        </b>
        .
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-[1rem]">
        <button className="font-medium md:text-xl text-slate-50 bg-gray-900 border border-[#0000005e] border-opacity-40 px-[1.5rem] py-[0.9rem] rounded-full text-sm">
          <a href="mailto:anastasia.cntr@gmail.com">Contact me ✉️</a>
        </button>
        <button className="font-medium md:text-xl bg-slate-50 text-gray-900 px-[1rem] py-[0.9rem] rounded-full text-sm">
          Download CV
        </button>
        <a
          className="px-1 py-1 rounded-full bg-[#a695ff92]"
          target="_blank"
          href="https://www.linkedin.com/in/anastasia-cantoreanu-59ba3426a/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(17 24 39)"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
          </svg>
        </a>
        <a
          className="px-1 py-1 bg-[#a695ff92] rounded-full"
          href="https://github.com/anastasia-cntr"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(17 24 39)"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
