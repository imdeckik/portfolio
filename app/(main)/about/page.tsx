import Container from "@/app/components/Container";

export default function About() {
  return (
    <Container>
      <section className="min-h-screen flex flex-col justify-start">
        <div>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-gray-900">
            More about me {""}
            <span className="font-abalone text-accent">intuitive</span>
            {""} and {""}
            <span className="font-abalone text-accent">useful products.</span>
          </h1>
        </div>
      </section>
    </Container>
  );
}
