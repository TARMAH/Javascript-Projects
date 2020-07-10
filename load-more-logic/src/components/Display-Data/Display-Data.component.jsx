import React , { useState } from 'react';

import {Container , MainDiv} from './Display-Data.styles';

import MyCard from '../Card/Card.component';


const DisplayData = () => {

const LENGTH = 20;
const DATA = [ ...Array(LENGTH).keys() ];
const LIMIT = 6;

const [showMore,setShowMore] = useState(true);
const [list,setList] = useState(DATA.slice(0, LIMIT));
const [index,setIndex] = useState(LIMIT);

const loadMore = () =>{
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (LENGTH - 1);
    const newList = list.concat(DATA.slice(index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  }

return (

<MainDiv>
  <Container>
    {list.map((n)=><MyCard number={n} key={n} />)}
  </Container>
  {showMore && <button onClick={loadMore}> Load More </button>}
</MainDiv>


  );

};

export default DisplayData;
