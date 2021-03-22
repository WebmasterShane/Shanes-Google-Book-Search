import React from "react";

function ListItem(props) {
  const books = props.book
  return (
    <div>
      <div key={books.index}>
       <li className="list-group-item m-2">

       <div className="float-right">
        
           <button
             className="btn btn-success"
            >Save</button>
             <button className="btn btn-danger">Unsave</button>
           
         <a className="btn btn-primary ml-2 mr-2" href={books.href} target="_blank" rel="noopener noreferrer">View</a>
       </div>
     

     <h4 className="font-weight-bold">{books.title}</h4>
     <h5>by {books.author}</h5>
     <div className="row">
       <div className="col-sm-12 col-md-auto text-center">
         {/* <img  alt={books.title} className="mt-1 mb-2" /> */}
       </div>
       <div className="col">
         <p>{books.description}</p>
       </div>
     </div>
       <div className="row">
         <div className="col">
           <small className="text-right">Saved on </small>
           </div>
       </div>

   </li>
   </div>
    </div>
  );
};

export default ListItem;