'use client'

import Card from './components/card'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { SearchContext } from './contexts/search-context'
import Loading from './components/loading'
import NotFound from './components/notFound'
import UpButton from './components/upButton'
import SearchBar from './components/searchBar'
import { getDigimons } from './lib/digimons'

export default function Home() {
  const context = useContext(SearchContext)

  const { data: digimons } = useQuery({
    queryKey: ['digimons2'],
    queryFn: () => getDigimons(context),
    enabled: context.apiCall,
  })

  return (
    <nav className="flex w-full flex-col items-center justify-center py-40 md:mt-44">
      <SearchBar />
      {digimons?.length === 0 && <NotFound />}

      {digimons === undefined && <Loading />}

      {digimons && (
        <>
          <Card digimonsData={digimons} />
          <UpButton></UpButton>
        </>
      )}
    </nav>
  )
}
