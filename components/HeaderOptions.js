import React from 'react'
import Headeroption from './Headeroption'
import {
    DotsVerticalIcon,
    MailIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    MapIcon,
    SearchIcon
} from '@heroicons/react/outline'

function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sml lg:text-base lg:justify-start lg:space-x-36 xl:pl-52 border-b">
            {/* left */}
            <div className="flex space-x-6">
                <Headeroption Icon={SearchIcon}
                    title="All" selected
                />
                <Headeroption Icon={PhotographIcon}
                    title="Image"
                />
                <Headeroption Icon={NewspaperIcon}
                    title="News"
                />
                <Headeroption Icon={MapIcon}
                    title="Map"
                />
                <Headeroption Icon={DotsVerticalIcon}
                    title="More"
                />

            </div>



            {/* right */}
            <div className="flex space-x-2">
                <p>Setting</p>
                <p>Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
