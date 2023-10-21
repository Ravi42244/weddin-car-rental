'use client';
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

function Navbar() {
    return (
        <div className='flex items-center p-4'>
            <Button variant='ghost' size='icon' className='md:hidden'>
                <Menu/>
            </Button>
        </div>
    )
}

export default Navbar
