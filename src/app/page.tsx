import Skills from '@/components/Skills';
import Info from '../components/Info';
import ProjectList from '../components/ProjectList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="max-h-screen my-10  ">
        <main className="flex flex-col items-center justify-center text-center text-white py-20">
          <Info />
          <ProjectList />
          <Skills />
        </main>
        <Footer/>
      </div>
    </>
  );
}
