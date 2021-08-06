import React from 'react'
import { TextField  } from '@material-ui/core';
const Filter = React.forwardRef((props:any, inpRef:any) => {

    const textHandler =(eve:any) =>{
        let dataArray:any =[]

        props.productData.map((pro:any) =>{
            if(pro.productName.toLowerCase().includes(eve.target.value)){
                dataArray.push(pro)
            }
            return true
        })
        props.filterHandler(dataArray)

    }

    console.log("filter render")
    return (
        <>
              <TextField
                id="outlined-basic" variant="outlined"
                label="filter"
                placeholder="filter"
                ref={inpRef}
                size="small"
                onChange={textHandler}
                />
        </>
    )
})


function areEqual(prevProps:any, nextProps:any) {

    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
        return true
    }else{
         return false
    }
    
 }

 export default  React.memo(Filter,areEqual )
// export default  React.memo(Filter)
