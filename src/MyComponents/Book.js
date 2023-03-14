import React from 'react'
import '../index.css'
 
const Book = ({img,title,author}) => {
  // console.log(props);
  // or
// const {img,title,author,children} = props.book

// attributes, eventHandler
// onclick, onMouseHover 
  const clickHandler =()=>{
    alert('hello ')
  }

  return (
   <article className='book' onMouseOver={()=>{
       console.log(title)
   }}>
    <img src={img} alt="" />
    <h1> {title}</h1>
    <h4>{author}</h4>
    {/* {children} */}
    <button type='button' onClick={clickHandler}>refrence example</button>
   </article>
  )
}
export default Book


// ------------------------or-----------
 
// import React from 'react'

// import '../index.css'
 
// const Book = (props) => {
  
//   // console.log(props);
//   // or
// const {img,title,author,children} = props.book

//   return (
//    <article className='book'>
//     <img src={img} alt="" />
//     <h1> {title}</h1>
//     <h4>{author}</h4>
//     {children}
  
//    </article>
   
//   )
// }

// export default Book