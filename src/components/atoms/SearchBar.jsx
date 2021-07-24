import React, { useState, useEffect, useRef } from 'react'
import { IoClose, IoSearch } from 'react-icons/io5'
import { useClickOutside } from 'react-click-outside-hook'
import HashLoader from 'react-spinners/HashLoader'

import {
  Wrapper,
  SearchInputWrapper,
  SearchInput,
  SearchIcon,
  CloseIcon,
  SearchContent,
  LineSeperator,
  LoadingWrapper,
  NoTvShows,
} from '../molecules'
import { AnimatePresence } from 'framer-motion'
import { UseDebounce } from '../hooks/debouncer'
import axios from 'axios'
import TvShowList from '../particles/TvShowList'

const containerVariant = {
  expanded: {
    height: '28em',
  },
  collapsed: {
    height: '3.8em',
  },
}

const containerTransition = { type: 'spring', damping: 22, stiffness: 150 }

const SearchBar = (props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchQuery, setsearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [tvShows, setTvShows] = useState([])

  const isEmpty = !tvShows || tvShows.length === 0

  const inputRef = useRef()

  const [clickRef, isClickOutside] = useClickOutside()
  const handleExpandContainer = () => setIsExpanded(true)

  const handleCollapseContainer = () => {
    setIsExpanded(false)
    setsearchQuery('')
    if (inputRef.current) inputRef.current.value = ''
    setTvShows([])
  }

  const handleChange = (e) => {
    e.preventDefault()
    setsearchQuery(e.target.value)
  }
  const handleSearchQuery = (query) => {
    const uri = `https://api.tvmaze.com/search/shows?q=${query}`
    return encodeURI(uri)
  }

  const searchTvShows = async () => {
    if (!searchQuery || searchQuery.trim() === '') return
    setLoading(true)
    const URL = handleSearchQuery(searchQuery)
    const { data } = await axios.get(URL).catch((err) => console.log(err))
    if (data) {
      console.log(data)
      setTvShows(data)
      setLoading(false)
    }
  }

  UseDebounce(searchQuery, 500, searchTvShows)

  useEffect(() => {
    if (isClickOutside) handleCollapseContainer()
  }, [isClickOutside])

  return (
    <Wrapper
      animate={isExpanded ? 'expanded' : 'collapsed'}
      variants={containerVariant}
      ref={clickRef}
      transition={containerTransition}
    >
      <SearchInputWrapper>
        <SearchIcon>
          <IoSearch />
        </SearchIcon>
        <SearchInput
          placeholder='Search for your destination'
          onFocus={handleExpandContainer}
          ref={inputRef}
          value={searchQuery}
          onChange={handleChange}
        />
        <AnimatePresence>
          {isExpanded && (
            <CloseIcon
              key='close-icon'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCollapseContainer}
              transition={{ duration: 0.3 }}
            >
              <IoClose />
            </CloseIcon>
          )}
        </AnimatePresence>
      </SearchInputWrapper>
      {isExpanded && <LineSeperator />}
      {isExpanded && (
        <SearchContent>
          <LoadingWrapper>
            <HashLoader loading={loading} color='#a8dadc' size={23} />
          </LoadingWrapper>
          {!loading && isEmpty && (
            <LoadingWrapper>
              <NoTvShows>
                No tv series found, try using another keyword
              </NoTvShows>
            </LoadingWrapper>
          )}

          {!loading && !isEmpty && (
            <>
              {tvShows.map(({ show }, idx) => (
                <TvShowList
                  key={idx}
                  url={show.image && show.image.medium}
                  name={show.name}
                  rating={show.rating && show.rating.average}
                />
              ))}
            </>
          )}
        </SearchContent>
      )}
    </Wrapper>
  )
}

export default SearchBar
