import Link from 'next/link';
import Image from 'next/image';
import { Inter, Lora } from 'next/font/google';

// Fuentes
const inter = Inter({ subsets: ['latin'] });
const lora = Lora({ subsets: ['latin'], style: ['normal', 'italic'] });

export default function Home() {
  return (
    <main className={`min-h-screen bg-[#F9F8F6] text-[#2C2C2C] flex flex-col items-center py-20 px-4 selection:bg-[#E2DFD8] ${inter.className}`}>
      
      {/* Sección de Perfil */}
      <div className="text-center mb-12">
        <div className="relative w-28 h-28 mx-auto mb-5">
          <Image 
            src="/perfil.jpg"
            alt="Jonathan"
            fill
            className="rounded-full object-cover shadow-md border-2 border-[#E2DFD8]"
            priority
          />
        </div> 

        <h1 className={`text-3xl md:text-4xl font-bold mb-3 tracking-tight ${lora.className}`}>
          Jonathan Baltodano
        </h1>
        <p className="text-[#595959] text-lg max-w-md mx-auto font-light">
          Ingeniero en Sistemas | Desarrollador | Escritor
        </p>
      </div>

      {/* Sección de Enlaces con colores oficiales */}
      <div className="w-full max-w-md flex flex-col gap-4">
        <LinkCard 
          title="Mi Portafolio (Proyectos)" 
          url="https://jonathanb-portafolio-s5qd.vercel.app/" 
          colorClass="bg-[#a1cda8] text-white hover:bg-[#627264] border-transparent"
        />
        <LinkCard 
          title="GitHub" 
          url="https://github.com/Alexxxx168" 
          colorClass="bg-[#24292e] text-white hover:bg-black border-transparent"
        />
        <LinkCard 
          title="Substack" 
          url="https://substack.com/@alexdrafts" 
          colorClass="bg-[#FF6719] text-white hover:bg-[#E55C16] border-transparent"
        />
        <LinkCard 
          title="LinkedIn" 
          url="https://www.linkedin.com/in/jonathan-baltodano-05b692317/" 
          colorClass="bg-[#0A66C2] text-white hover:bg-[#084e96] border-transparent"
        />
      </div>

    </main>
  );
}
function LinkCard({ title, url, colorClass }: { title: string, url: string, colorClass?: string }) {
  const defaultClass = "bg-white border-[#E2DFD8] text-[#2C2C2C] hover:border-[#D1CEC7]";
  const appliedClass = colorClass || defaultClass;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full text-center p-4 border rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 font-medium ${appliedClass}`}
    >
      {title}
    </a>
  );
}