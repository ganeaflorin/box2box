import { paths } from '@/constants/paths';
import { Tabs, TabsList, TabsTrigger } from './shadcn-ui/tabs';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <Tabs defaultValue={paths.dashboard} className='h-20 flex items-center'>
      <TabsList className='bg-transparent'>
        <TabsTrigger value={paths.dashboard}>
          <Link href={paths.dashboard}>Dashboard</Link>
        </TabsTrigger>
        <TabsTrigger value={paths.home}>
          <Link href={paths.home}>Home</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
