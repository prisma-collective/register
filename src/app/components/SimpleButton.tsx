import Link from 'next/link';

interface SimpleButtonProps {
  redirectTo: string;
  buttonText: string;
  className?: string; 
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ redirectTo, buttonText, className }) => {
  return (
    <Link href={redirectTo} className={`py-2 px-4 pointer-events-auto border-2 rounded-3xl border-white hover:bg-white text-white hover:text-black ${className}`}>
        {buttonText}
    </Link>
  )
}

export default SimpleButton
