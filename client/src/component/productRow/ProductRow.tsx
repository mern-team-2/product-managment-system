import React from "react";
// import "./row.css"
import { Link } from "react-router-dom";
import {Button, TableCell, TableRow } from '@material-ui/core';

const Row = (props: any) => {
    const {productDeatail, deleteHandler} = props
    console.log("row render");
    return (
           <TableRow>
               <TableCell> <Link to={`/table/view/${productDeatail.productId}`}> <img src={productDeatail.imageUrl} style={{width:"70px"}} alt="" />  </Link> </TableCell>
               <TableCell  align="right" >{productDeatail.productName}</TableCell>
                <TableCell align="right" >{productDeatail.productCode}</TableCell>
                <TableCell align="right" >{productDeatail.price}</TableCell>
                <TableCell align="right" >{productDeatail.starRating}</TableCell>
                <TableCell align="right" >{productDeatail.description}</TableCell>
                <TableCell align="right" >{productDeatail.releaseDate}</TableCell>
                <TableCell><Button  variant="outlined" color="secondary"
                                onClick={() => {
                                    const confirmBox = window.confirm(
                                        "Do you really want to delete this product"
                                    )
                                    if(confirmBox === true) {
                                        deleteHandler(productDeatail.productId)
                                    }     
                                }}>Delete</Button></TableCell>
            </TableRow> 
    )
}

function areEqual(prevProps:any, nextProps:any) {

   if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
       return true
   }else{
        return false
   }
   
}


export default React.memo(Row, areEqual)