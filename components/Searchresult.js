import React from 'react'
import PaginationButton from './PaginationButton'

function Searchresult({ results }) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-500 text-md mb-3 mt-3">About {results?.searchInformation.totalResults} results  in {results?.searchInformation.formattedSearchTime} seconds
            </p>
            {results.items?.map((result) => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className="group">
                        <a href={result.link} className="text-sm">
                            {result.formattedUrl}
                        </a>
                        <a href={results.link} >
                            <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline cursor-pointer">{result.title}</h2>
                        </a>
                    </div>
                    <p className="line-clamp-2">{result.snippet}</p>
                </div>
            ))}
            <PaginationButton />
        </div>
    )
}

export default Searchresult
