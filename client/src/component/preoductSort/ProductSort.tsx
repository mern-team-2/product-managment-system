import React, { useEffect } from 'react'
import {FormControl,InputLabel, Select, MenuItem} from '@material-ui/core';
const Sort = (props:any)=> {

    const {productData, sortHandler} = props

    useEffect(()=>
    {

    },[productData])

    const stringSortFunc = (value:any) => {
        productData.sort((a:any, b:any) => a[value].localeCompare(b[value]));
        sortHandler(productData)
    }

    const integerSortFunc = (value:any) => {
        productData.sort((a:any, b:any) => {return a[value] - b[value]});
        sortHandler(productData)
    }

    const slectSortHandler = (eve:any) =>{

        if(eve.target.value === "productName" || eve.target.value === "productCode"){
            stringSortFunc(eve.target.value)
        }else{
            integerSortFunc(eve.target.value)
        }
    }

    console.log("sort render");
    return (
        <>

            <FormControl >
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{width:"130px"}}
                onChange={slectSortHandler}
                value="select"
                >
                <MenuItem value="select">select</MenuItem>
                <MenuItem value="productName">Name</MenuItem>
                <MenuItem value="price">Price</MenuItem>
                <MenuItem value="productCode">Code</MenuItem>
                <MenuItem value="id">Id</MenuItem>
                <MenuItem value="starRating">Rating</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default  React.memo(Sort)
