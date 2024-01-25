import Form from "../../components/Form/Form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col gap-[1rem] py-[7rem] max-w-[90%]"
    >
      <h2 className="text-3xl text:md font-medium text-slate-50 text-center">
        Contact Me
      </h2>
      <p className="lg:text-2xltext-wrap text-center text-sm text-slate-50 ">
        You can reach me at{" "}
        <a className="underline" href="mailto:anastasia.cntr@gmail.com">
          anastasia.cntr@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <Form />
    </section>
  );
}
