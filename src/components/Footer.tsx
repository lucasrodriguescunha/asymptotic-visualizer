export function Footer() {
  return (
    <footer className='border-t bg-background'>
      <div className='flex items-center justify-center px-6 py-6 text-xs md:text-base text-muted-foreground'>
        <p>
          Desenvolvido com ❤️ por{' '}
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
