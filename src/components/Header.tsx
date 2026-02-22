import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

export const Header = () => {
  return (
    <header className='bg-muted/40 border-b'>
      <div className='w-full max-w-6xl mx-auto p-4'>
        <div className='flex items-center justify-between'>
          <ModeToggle />

          <Button variant='outline' size='icon'>
            <Menu className='h-[1.2rem] w-[1.2rem]' />
            <span className='sr-only'>Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}