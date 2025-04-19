import Link from 'next/link';

interface SimpleButtonProps {
  redirectTo: string;
  buttonText: string;
  className?: string; 
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ redirectTo, buttonText, className }) => {
  return (
    <Link href={redirectTo} className='py-5 px-14 bg-transparent pointer-events-auto border-[1.5px] border-white hover:bg-white text-white hover:text-black'>
        {buttonText}
    </Link>
  )
}

export default SimpleButton
