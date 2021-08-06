/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef}  from "react";
import Row  from "../productRow/ProductRow";
import Sort from "../preoductSort/ProductSort";
import Filter from "../productFilter/ProductFilter";
import { ProductService } from "../../service/services";
import { useSelector, useDispatch } from 'react-redux'
import withErrorBoundary from "../withErrorBoundary/WithErrorbBoundary";
import { getProducts, getUpdateProducts} from "../../redux/actionCallbacks";
import {Grid, TableContainer, Table,TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';

const ProductTable = (props:any) => {

    const inputEl:any = useRef(null)

    const productsInfo:any = useSelector((combinedState: any) => combinedState.productsStateRef.products)
    const errorInfo = useSelector((combinedState: any) => combinedState.productsStateRef.errorText)

    const dispatchRef = useDispatch()

    const [filterArray, setFilterArray] = useState([])
    const [isTableFilter, setFilter] = useState(false)
    const [isTableSort, setSort] = useState(0)

    // for error
    if (errorInfo !== '') {
        let heroError = new Error('Server -- 404')
        throw heroError 
    }

    // mount
    useEffect(() => {

        let respCallBack = getProducts()
        dispatchRef(respCallBack)
        
    },[]);

    // delete function
    const deleteRowHandler = (code: any) =>{
        let request = ProductService.Create().deleteData(code)
        request
            .then(resp => {
                console.log("delete")
                let respCallBack = getProducts()
                dispatchRef(respCallBack)

            }).catch(error => {
                console.log(error);
            });
    }


    //  update for sort
    // useEffect(() => {
    //     console.log("sort--- effect")
    // }, [isTableSort])

    const sortDataHandler = (products:any) =>{

        if(isTableFilter){
            setFilterArray(products)
            setSort(isTableSort +1)
        }else{
            let respCallBack = getUpdateProducts(products)
            dispatchRef(respCallBack)
            setSort(isTableSort +1)
        }
    }

    // update for filter
    const filterDataHandler = (products:any) =>{
        setFilterArray(products)
        setFilter(true)
    }

    return(
        <div className="table-rtl">
            {
                productsInfo && ( 
                
            <>
                <Grid container justifyContent="center"  direction="row"
                    alignItems="center"  spacing={3}>
                    {
                        isTableFilter ?
                        <Sort className="col-6" sortHandler={sortDataHandler} productData={filterArray}/>
                        :
                        <Sort className="col-6" sortHandler={sortDataHandler} productData={productsInfo}/>
                
                    }
                    &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;
                    <Filter  filterHandler={filterDataHandler} ref={inputEl} productData={productsInfo} />
                </Grid>
                <br />

            <TableContainer style={{width:"60%", marginLeft:"auto", marginRight:"auto"}}  >
    
                <Table aria-label="customized table">
                    <TableHead style={{backgroundColor:"grey"}} >
                        <TableRow >
                            <TableCell  align="center">Image</TableCell>
                            <TableCell  align="center">Name</TableCell>
                            <TableCell  align="center">Code</TableCell>
                            <TableCell  align="center">Price</TableCell>
                            <TableCell  align="center">Rating</TableCell>
                            <TableCell  align="center">Description</TableCell>
                            <TableCell  align="center">Release Date</TableCell>
                            <TableCell  align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody >
                            {
                                isTableFilter
                                ? 
                                    filterArray.map( (pro:any) => {
                                                return <Row productDeatail={pro}  key={pro.productId}
                                                deleteHandler={deleteRowHandler}
                                            />
                                    }) 
                                :
                                    productsInfo.map( (pro:any) => {
                                        return <Row productDeatail={pro}  key={pro.productId}
                                        deleteHandler={deleteRowHandler}
                                        />
                                    })
                                }
                    </TableBody>
                </Table>
            </TableContainer>
            
            </>)
            }
        </div>
    )
}

export default withErrorBoundary(ProductTable);


