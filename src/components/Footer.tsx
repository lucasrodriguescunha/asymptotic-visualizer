export function Footer() {
  return (
    <footer className='bg-muted/40 border-b'>
      <div className='flex items-center justify-center px-6 py-6 text-xs md:text-base text-muted-foreground'>
        <p>
          Desenvolvido por {' '}
          <a
            href='https://github.com/lucasrodriguescunha'
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium text-foreground transition-colors hover:underline'
          >
            Lucas Rodrigues Cunha
          </a>
        </p>
      </div>
    </footer>
  );
}
