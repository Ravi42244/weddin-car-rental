import '@/app/(Landing Page)/globals.css'
export const metadata = {
    title: 'Sign-In | Wedding Car Rentals',
    description: 'Sign In Page',
  }
   
  export default function RootLayout({ children }) {
   return (
      <html lang="en" suppressHydrationWarning={true}>
        <body className='font-ubuntu' >{children}</body>
      </html>
    )
  }
  