import React from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon

} from '@heroicons/react/outline'
function TweetBox() {
  return (
    <div className="flex space-x-2 p-5">
        <img className="h-14 w-14 rounded-full object-cover mt-4" 
            src="https://links.papareact.com/gll" 
            alt="" />
        
        <div className="flex flex-1 items-center p1-2">
            <form className="flex flex-1 flex-col">
                <input type="text" placeholder="What's Happening?" 
                className="h-24 w-full text-xl space-x-2
                placeholder:text-xl outline-none"/>
                <div className="flex items-center">
                    <div className="flex flex-1 space-x-2 text-twitter">
                        <PhotographIcon className="h5 w-5" />
                        <SearchCircleIcon className="h5 w-5" />
                        <EmojiHappyIcon className="h5 w-5" />
                        <CalendarIcon className="h5 w-5" />
                        <LocationMarkerIcon className="h5 w-5" />
                    </div>
                    <button className="bg-twitter rounded-full px-5 py-2
                            font-bold text-white">
                    Tweet
                </button>
                </div>


            </form>
        </div>
    </div>
  )
}

export default TweetBox