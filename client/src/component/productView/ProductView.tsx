import React, {useEffect}  from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getProductData } from "../../redux/actionCallbacks";
import withErrorBoundary  from "../withErrorBoundary/WithErrorbBoundary";
import {Card, CardActionArea, CardMedia, CardContent, CardActions, Button ,Typography} from '@material-ui/core';


const ProductView = (props:any)=>{

    const productInfo:any = useSelector((combinedState: any) => combinedState.productDataStateRef.product)
    const errorInfo = useSelector((combinedState: any) => combinedState.productDataStateRef.errorText)
    const dispatchRef = useDispatch()

    if (errorInfo !== '') {
        let heroError = new Error('Server -- 404')
        throw heroError 
    }
    // console.log('error...' + errorInfo );
    useEffect(() => {
        let respCallback = getProductData(props.match.params.id)
        dispatchRef(respCallback)
    },[]);

    let design = null;

    design =  (
            productInfo &&  <div className="view-rtl"> 
                <Card  style={{width:"500px", marginLeft:"auto", marginRight:"auto"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    style={{width:"250px", marginLeft:"auto", marginRight:"auto"}}
                    image={productInfo.imageUrl}
                />
                <CardContent>
                        <Typography gutterBottom variant="h4" component="h2">
                            Details of: {productInfo.productName}
                        </Typography>
                        
                        <Typography variant="h5" color="textSecondary" component="h4">
                            Name: {productInfo.productName}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="h4">
                            Code: {productInfo.productCode}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="h4">
                            Description:  {productInfo.description}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="h4">
                            Availablity:  {productInfo.releaseDate}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="h4">
                            Price:  {productInfo.price}
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="h4">
                            Rating: {productInfo.starRating}
                        </Typography>
                </CardContent>
                </CardActionArea>

                <CardActions>
                    <Link to="/table">
                        <Button size="large"  variant="contained" color="secondary">
                        Back
                        </Button>
                    </Link>

                    <Link to={`/input/${productInfo.productId}`}>
                    <Button  size="large"  variant="contained" color="primary">
                        Edit
                    </Button>
                    </Link>
                </CardActions>
          </Card>
        </div>
    )

        return design
}

export default withErrorBoundary(ProductView) 