'use client'

import { api } from '../services/api'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { SearchContext } from '../contexts/search-context'
import logo from '../../app/icon.png'
import Image from 'next/image'
import SearchIcon from './searchIcon'

export default function SearchBar() {
  const { search, setSearch, selectedLevel, setSelectedLevel, setApiCall } =
    useContext(SearchContext)

  const getDigimonsLevel = async () => {
    const response = await api.get<string[]>('/digimons/levels')
    return response.data
  }

  const { data: digimonLevels } = useQuery({
    queryKey: ['digimons1'],
    queryFn: getDigimonsLevel,
  })

  const handleAction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setApiCall(true)
  }

  return (
    <div className="max-h-100 fixed top-0 z-20 flex w-full flex-col items-center justify-start gap-y-4 bg-mainColor-700 shadow-xl">
      <div
        className="items-left justify-left top-0 flex w-full flex-col hover:cursor-pointer"
        onClick={() => setApiCall(true)}
      >
        <Image
          priority={true}
          width={200}
          height={200}
          src={logo}
          alt="logo"
          className="h-[50px] w-[80px] md:h-[80px] md:w-[160px]"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center md:flex-row">
        <form
          className="flex h-48 w-full flex-col items-center justify-center gap-3 px-2"
          onSubmit={handleAction}
        >
          <div>
            <h1 className="text-extrabold text-center text-2xl text-white md:mb-8 md:text-5xl">
              Find your favorite Digimon!
            </h1>
          </div>
          <div className="flex h-20 w-full flex-col items-center justify-center gap-3 px-2 text-sm md:flex-row md:text-base">
            <input
              placeholder="Search for a Digimon by name"
              type="text"
              name="inputsearch"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-full w-10/12 rounded-xl bg-slate-100 p-2 focus:outline-none md:w-1/3 md:p-4"
            />
            <div className="flex flex-row gap-x-2">
              <div className="dropdown">
                <div className="relative flex h-8 w-[90px] transform cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-mainOrange-600 p-2 text-center font-semibold text-white transition-transform	hover:scale-105 md:h-12 md:w-[100px]  md:text-lg">
                  {selectedLevel || 'Level'}
                </div>
                <div className="dropdown-content w-[110px]">
                  <a
                    className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                      selectedLevel === '' ? 'selected' : ''
                    }`}
                    style={{ height: '48px', width: '110px' }}
                    onClick={() => setSelectedLevel('')}
                  ></a>
                  {digimonLevels?.map((level, index) => (
                    <a
                      style={{ height: '48px', width: '110px' }}
                      key={index}
                      data-selected={level === selectedLevel}
                      href="#"
                      className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                        selectedLevel === level ? 'selected' : ''
                      }`}
                      onClick={() => setSelectedLevel(level)}
                    >
                      {level}
                    </a>
                  ))}
                </div>
              </div>
              <button
                id="search_button"
                disabled={!search && !selectedLevel}
                className="relative flex h-8 w-[90px] transform flex-row items-center justify-around overflow-hidden rounded-lg bg-mainBlue-600 p-2 text-center font-semibold text-white opacity-100 drop-shadow-lg transition-transform hover:scale-105 disabled:cursor-auto disabled:border-white disabled:opacity-50 disabled:hover:scale-100 md:h-12 md:w-[100px] md:text-lg"
                type="submit"
              >
                Search
                <SearchIcon />
              </button>
            </div>
          </div>
          <div className="pb-6">
            <p className="text-center text-xs text-white md:text-base">
              Search for a Digimon by name, level, or both
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
