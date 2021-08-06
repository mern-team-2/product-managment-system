import React,{ useEffect} from "react";
import { ProductService } from "../../service/services";
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from "../../redux/actionCallbacks";

import * as Yup from 'yup'

import {
    Formik,
    Form,
    Field,
    ErrorMessage
  } from 'formik'

const Input = (props:any) => {

    const productInfo:any = useSelector((combinedState: any) => combinedState.productDataStateRef.product)
    const dispatchRef = useDispatch()

    useEffect(() => {

    },[props.match.params.id]);


    const dataHandler = (data: any) => {
       
        if(props.match.params.id !== undefined){
            console.log(data)
            ProductService.Create()
                .putData(data)
                    .then((resp:any) => {
                        let respCallback = getProducts()
                        dispatchRef(respCallback)
                        alert("Data updated Succesfully!!")
                    }).catch((error:any) => {
                    console.log(error);
                    console.log("data not updated....")
                    });
        }else{
            ProductService.Create()
            .postData(data)
                .then(response =>{

                    let respCallback = getProducts()
                    dispatchRef(respCallback)
                    alert("Data Added Succesfully!!")
                })
                .catch(error =>{
                    console.log("some error")
                    
                })
        }
    }

    const onSubmit = (values:any, submitProps:any) => {
        dataHandler(values)
        submitProps.setSubmitting(false)
        submitProps.resetForm()
        props.history.push(`/input/table/${props.match.params.id}`)
    }
    
    const todayDate = new Date().toJSON().slice(0,10)

    const validationSchema = Yup.object({

        productId: Yup.number().positive( 'number should be positive').required('Required') , 
        productName: Yup.string().required('Required'),
        releaseDate: Yup.date().max(todayDate, "choose past date").required('Required'),
        description: Yup.string().min(5, 'too short').required('Required'),
        starRating: Yup.number().positive( 'number should be positive').required('Required') , 
        price: Yup.number().positive( 'number should be positive').required('Required') , 
        productCode: Yup.string()
        .length(8, 'code should have 8 character')
        .required('Required'),
    })

    console.log(props.match.params.id);
    return (


        <div className="container form-group col-4">
           
            <Formik
            initialValues={props.match.params.id?
                {
                    productId: productInfo.productId,
                    productName:  productInfo.productName,
                    productCode:  productInfo.productCode,
                    releaseDate:   productInfo.releaseDate,
                    description:  productInfo.description,
                    price: productInfo.price,
                    starRating:  productInfo.starRating,
                    imageUrl:  productInfo.imageUrl
                }
                :
                {
                    productId: '',
                    productName:  '',
                    productCode:  '',
                    releaseDate:   '',
                    description:  '',
                    price: '',
                    starRating:  '',
                    imageUrl:  'https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png'
                }
                }
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className='form-control'>
                            <label htmlFor='productName'>Product ID</label>
                            <Field placeholder="productId"  type='text' id='productId' name='productId' />
                            <span style={{color:'red'}}><ErrorMessage name='productId'/> </span>
                            
                        </div>
                    <div className='form-control'>
                        <label htmlFor='productName'>Product Name</label>
                        <Field placeholder="productName"  type='text' id='productName' name='productName' />
                        <span style={{color:'red'}}><ErrorMessage name='productName'/> </span>
                        
                    </div>
                    <br />
                    <div className='form-control'>
                        <label htmlFor='productCode'>Product Code</label>
                        <Field placeholder="productCode" type='text' id='productCode' name='productCode' />
                        <span style={{color:'red'}}> <ErrorMessage name='productCode' />  </span>
                    </div>
                    <br />
                    <div className='form-control'>
                        <label htmlFor='description'>Description</label>
                        <Field placeholder="description" type='text' id='description' name='description' />
                        <span style={{color:'red'}}> <ErrorMessage name='description' />  </span>
                    </div>
                    <br />
                    <div className='form-control'>
                        <label htmlFor='price'>Price</label>
                        <Field placeholder="price" type='number' id='price' name='price' />
                        <span style={{color:'red'}}> <ErrorMessage name='price' />  </span>
                    </div>
                    <br />
                    <div className='form-control'>
                        <label htmlFor='starRating'>Rating</label>
                        <Field placeholder="starRating" type='number' id='starRating' name='starRating' />
                        <span style={{color:'red'}}> <ErrorMessage name='starRating' />  </span>
                    </div>
                    <br />
                    <div className='form-control'>
                        <label htmlFor='releaseDate'>Release date</label>
                        <Field placeholder="releaseDate" type='date' id='releaseDate' name='releaseDate' />
                        <span style={{color:'red'}}> <ErrorMessage name='releaseDate' />  </span>
                    </div>
                    <br />
                    {
                        props.match.params.id !== undefined 
                        ?
                        <button type='submit'>Update </button>
                        :
                        <button type='submit'>Submit </button>
                    }

                    &nbsp; &nbsp; &nbsp; &nbsp; 

                    <button type='submit' style={{background:"blue"}} onClick={()=>{
                        props.history.push('/table')
                    }}> Cancel </button>
                </Form>
            </Formik>

        </div>
    )
}

export default  React.memo(Input)
