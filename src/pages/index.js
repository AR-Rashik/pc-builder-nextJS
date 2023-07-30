import RootLayout from "@/components/Layouts/RootLayout";
import Hero from "@/components/UI/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
