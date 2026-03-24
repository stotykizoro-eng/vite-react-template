import { ReactNode } from 'react';
import PhoneFixBar from './PhoneFixBar';

interface Props {
  children: ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <>
      <div className="page-wrap">
        {children}
      </div>
      <PhoneFixBar />
    </>
  );
}
