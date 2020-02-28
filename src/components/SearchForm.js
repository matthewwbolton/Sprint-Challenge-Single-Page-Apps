import React, { useState } from "react";
// import { withFormik, Form, Field } from 'formik';

const SearchForm = (props) => {

  const [query, setQuery] = useState('');

  // const [queryResult, setQueryResult] = useState('');
  
  // useEffect (() => {
  //   console.log('useEffect is triggered')
    
  //   const searchCharacter = props.character.filter(elem => {
  //     elem.name.toLowerCase().includes(query.toLowerCase())
  //   });
  //   // console.log(searchCharacter)

    

  // },[query])
 
  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setCharacter(props.character.filter(elem => elem.name.toLowerCase().includes(query.toLowerCase())));
    
  }
  
  
  
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Search Characters:
          <input onChange={handleChange} type='text' id='search' name='search' placeholder='Search' />
        </label>
        <button type='submit'>Search</button>
      </form>
    </div>





//     <section className="search-form">
//      <Form>
//        <label htmlFor='search'>
//          <Field name='search' id='search' type='text' placeholder='Search'/>
//        </label>
//        <button type='submit'>Search</button>
//      </Form>
//     </section>
//   );
// }

//   const FormikSearchForm = withFormik({
//     mapPropsToValues({search}){
//       return{
//         search: '' || ''
//       };
//     },

//     handleSubmit(values){
//       console.log(values);
      
     

//     }
//   })(SearchForm);

  
  )};

  export default SearchForm;
