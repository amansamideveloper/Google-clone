import React from 'react'
import Header from '../components/Header'
import { API_KEY, CONTEXT_KEY } from '../keys'
import Response from '../Response';
import Searchresult from '../components/Searchresult';
import { useRouter } from 'next/router'
function search({ results }) {

    const router = useRouter();
    return (
        <div>
            <header>

                <title>{router.query.term} - Google search</title>
                <link rel="icon" href="/favicon.ico"></link>
            </header>

            <Header />
            <Searchresult results={results} />
        </div>
    )
}

export default search
export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";


    const data = useDummyData ? Response : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then((response) => response.json());

    return {
        props: {
            results: data
        }
    }
}
