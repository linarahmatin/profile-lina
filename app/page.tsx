import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 font-sans">
      <main className="flex flex-col items-center justify-center w-full max-w-3xl px-10 py-20 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
        
        <Image
          src="/profile.png"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full mb-6"
        />

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-2">
          Halo, saya Sesy Tana Lina Rahmatin
        </h1>

        <div className="text-center text-gray-600 dark:text-gray-300 mb-4">
          <p>NIM: 2341720029</p>
          <p>Kelas: TI-3F</p>
          <p>Jurusan: Teknik Informatika</p>
          <p>Kampus: Politeknik Negeri Malang</p>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-center max-w-md mb-8">
          Saya mahasiswa yang tertarik pada pengembangan web,
          khususnya menggunakan Next.js dan React.
        </p>

        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            href="https://github.com/linarahmatin"
            target="_blank"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Lihat Project
          </a>

          <a
            href="mailto:linarahmatin9@gmail.com"
            className="px-6 py-3 border border-gray-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Hubungi Saya
          </a>
        </div>

      </main>
    </div>
  );
}
