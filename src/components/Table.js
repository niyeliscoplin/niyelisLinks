import { render } from '@testing-library/react';
import React from 'react';

const TableHeader = () => { 
    // boilerplate table header functional component
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
   const rows = props.linkData.map((row, index) => {
       return (
           <tr>
<td>{row.name}</td>
                <td><a href={row.URL}>{row.URL}</a></td>
                <td><button onClick={() => props.removeLink(index)}>Delete</button></td>
           </tr>
       );
   });

   return <tbody> {rows} </tbody>;
}
render();
    function Table(props) {
        //    const { linkData, removeLink } = props;
        {
            return (
                <div>
                    {TableHeader()}
                    {TableBody(props)}
                </div>
            );
        }

    }
export default Table;
