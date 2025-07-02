import { AlertComponent } from '@/components/azure/home/AlertComponent';
import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <Head>
        <title>Cloud Performance</title>
        <meta name="description" content="Cloud Performance landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AlertComponent/>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <div className="flex flex-col items-center gap-4">
            <Image
              src="/cloudperformance-logo.png"
              alt="Cloud Performance"
              width={200}
              height={200}
              className="rounded-lg shadow-md"
            />
          <h1 className="text-4xl font-bold text-gray-800 mt-4">
            Cloud Performance
          </h1>
          <Link href='/azure/main-view' className='bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 transition-all'>
            Dashboards Azure
          </Link>
          <Link href='/aws/main-view' className='bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 transition-all'>
            Dashboards AWS
          </Link>
        </div>
      </main>
    </div>
  );
}