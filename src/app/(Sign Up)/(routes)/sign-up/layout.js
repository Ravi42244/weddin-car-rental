import '../../../(Landing Page)/globals.css'
export const metadata = {
    title: 'Sign-In | Wedding Car Rentals',
    description: 'Sign In Page',
  }
   
  export default function RootLayout({ children }) {
   return (
      <html lang="en">
        <body className='font-ubuntu' suppressHydrationWarning={true}>{children}</body>
      </html>
    )
  }
  