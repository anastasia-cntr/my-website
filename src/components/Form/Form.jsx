export default function Form() {
  return (
    <form
      className="flex flex-col gap-[1.5rem] caret-slate-50 text-slate-50]"
      action="https://formsubmit.co/anastasia.cntr@gmail.com"
      method="POST"
    >
      <input
        className="px-4 py-3 bg-slate-700 rounded-lg"
        type="email"
        name="email"
        placeholder="Your email"
        required
      ></input>
      <textarea
        type="text"
        name="message"
        required
        className="px-4 py-3 bg-slate-700 rounded-lg h-[20rem]"
        cols="30"
        rows="10"
        placeholder="Your message"
      ></textarea>
      <button
        type="submit"
        className="bg-slate-700 max-w-[8rem] rounded-md group flex items-center justify-center font-medium text-white py-4 gap-1"
      >
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          fill="rgb(51 65 85)"
        >
          <path
            d="M20.7639 12H10.0556M3 8.00003H5.5M4 12H5.5M4.5 16H5.5M9.96153 12.4896L9.07002 15.4486C8.73252 16.5688 8.56376 17.1289 8.70734 17.4633C8.83199 17.7537 9.08656 17.9681 9.39391 18.0415C9.74792 18.1261 10.2711 17.8645 11.3175 17.3413L19.1378 13.4311C20.059 12.9705 20.5197 12.7402 20.6675 12.4285C20.7961 12.1573 20.7961 11.8427 20.6675 11.5715C20.5197 11.2598 20.059 11.0295 19.1378 10.5689L11.3068 6.65342C10.2633 6.13168 9.74156 5.87081 9.38789 5.95502C9.0808 6.02815 8.82627 6.24198 8.70128 6.53184C8.55731 6.86569 8.72427 7.42461 9.05819 8.54246L9.96261 11.5701C10.0137 11.7411 10.0392 11.8266 10.0493 11.9137C10.0583 11.991 10.0582 12.069 10.049 12.1463C10.0387 12.2334 10.013 12.3188 9.96153 12.4896Z"
            stroke="#fff"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
