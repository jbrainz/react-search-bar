import { motion } from 'framer-motion'
import styled from 'styled-components'


export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 35em;
  height: 3.8em;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
`
export const SearchInputWrapper = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 17px;
  color: #020202;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;

  &::focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
   {
    color: #2e2c2c;
    transition: all 258ms ease-in-out;
  }
`

export const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 27px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
`
export const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 27px;
  margin-right: 20px;
  margin-top: 6px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #dfdfdf;
  }
`
export const LineSeperator = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #a59f9f78;
`

export const SearchContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: auto ;
  overflow-x: hidden ;

`

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TvShowLWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #a59f9f78;
  width: 100%;
  height: 3em;
  padding: 6px 8px;
`
export const Thumbnail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;

  img{
    width: auto;
    height: 100%;
  }
`

export const Name = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`

export const Rating = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.3;
`
export const NoTvShows = styled.span`
  color: #a1a1a1;
  font-size: 15px;
  display: flex;
`
