import React from 'react'
import { GlobeIcon } from '@heroicons/react/solid'
function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-400 bg-gray-100 text-sm">
            <div className="px-8 py-3">
                <p>Addis Abeba Ethiopia</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 grid-flow-row-dense">
                <div className="flex justify-center items-center lg:col-span-2 lg:col-span-2">
                    <GlobeIcon className="h-5 mr-1 text-green-200" /> Carbon newton since
                </div>
                <div className="flex justify-center space-x-4 whitespace-nowrap md:justify-items-start">
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How to work</p>
                </div>
                <div className="flex justify-center space-x-4 whitespace-nowrap md:ml-4">
                    <p>Privacy</p>
                    <p>Term</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
