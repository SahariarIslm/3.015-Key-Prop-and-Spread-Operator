import React from 'react'
import ReactDOM from 'react-dom';

// CSS
import './index.css';
// setup vars
const books =
[
    {
        id:1,
        title:'A Letter From Your Teacher: On the Last Day',
        author:'Shannon Olsen',
        img:"https://images-na.ssl-images-amazon.com/images/I/61AqjgMxpLL._AC_UL604_SR604,400_.jpg"
    },
    {
        id:2,
        title:'I Love You to the Moon and Back',
        author:'Amelia Hepworth',
        img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg"
    },
    {
        id:3,
        title:'The Palace Papers: Inside the House of',
        author:'Tina Brown',
        img:"https://images-na.ssl-images-amazon.com/images/I/81Po3D6KJLL._AC_UL302_SR302,200_.jpg"
    }
];


function BookList(){
    return (
        // <section className='booklist'> 
        //     {books.map((book)=>{
        //         return <Book img={book.img} title={book.title} author={book.author} />;
            
        //     })}
        // </section>

        // <section className='booklist'> 
        //     {books.map((book)=>{
        //         const {img,title,author}=book
        //         return <Book img={img} title={title} author={author} />;
        //     })}
        // </section>
        <section className='booklist'> 
            {books.map((book)=>{
                const {img,title,author}=book
                return <Book key={book.id} {...book} />;
            })}
        </section>
    );
}

const Book = (property) =>{
    const {img,title,author} = property;
    // const {img,title,author} = property;
    return <article className='book'>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
    </article>
};

ReactDOM.render(<BookList/>,document.getElementById('root'));