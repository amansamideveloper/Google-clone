import React from 'react'
import Image from 'next/image'
import router from 'next/router'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'
function Header() {
    const searchInputRef = useRef(null)
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`)
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    width={120} height={40} className="cursor-pointer"
                    onClick={() => router.push('/')}
                />
                <form className='flex border px-6 py-3 ml-10 flex-grow border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                    <input
                        ref={searchInputRef}
                        className="flex-grow w-full focus:outline-none" type="text"
                    />
                    <XIcon className="h-7 sm:mr-3 transition duration-100 transform hover:scale-125"
                        onClick={() => (searchInputRef.current.value = "")} />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden onClick={search} type="submit">search</button>
                </form>
                <Avatar className='ml-auto'
                    url='https://firebasestorage.googleapis.com/v0/b/aman-instagram-52add.appspot.com/o/posts%2FsW1aGs2BwhAtWOZWW0MQ%2Fimage?alt=media&token=cb1a64ae-7ecd-40de-83d8-fdd37e0de0c3' />

            </div>
            <HeaderOptions />
        </header>

    )
}

export default Header
