import { Component } from "react";

class Products extends Component
{
    //primitive data type
    developer = "Nikhil";
    componentName = "Products";

    //primitive data array
    productCategory = ['Cold-Drinks','Electronics', 'Clothing', 'Accessories', 'Shoes', 'Automotive']

    productList = [
        {pId:101, pName:'Pepsi',pCategory:'Cold-Drink', pPrice:50,pDiscount:3, pIsInStock:true},
        {pId:102, pName:'Coke',pCategory:'Cold-Drink', pPrice:500,pDiscount:3, pIsInStock:true},
        {pId:103, pName:'Maggie',pCategory:'Fast-Food', pPrice:75,pDiscount:8, pIsInStock:true},
        {pId:104, pName:'IPhone',pCategory:'Electronics', pPrice:150000,pDiscount:18, pIsInStock:false},
        {pId:105, pName:'Air Pods',pCategory:'Electronics', pPrice:28000,pDiscount:28, pIsInStock:true},
        {pId:106, pName:'Dell Lattitude',pCategory:'Electronics', pPrice:80000,pDiscount:2, pIsInStock:true},
        {pId:107, pName:'Apple Watch',pCategory:'Electronics', pPrice:35000,pDiscount:30, pIsInStock:true},
        {pId:108, pName:'Fossil',pCategory:'Electronics', pPrice:46000,pDiscount:35, pIsInStock:false},
        {pId:109, pName:'Trailhawk',pCategory:'SUV', pPrice:3600000,pDiscount:7, pIsInStock:true},
        {pId:110, pName:'Pasta',pCategory:'Fast-Food', pPrice:250,pDiscount:1, pIsInStock:true},
    ]

    productDetails = {
        pId:101,
        pName:'Iphone',
        pCategory:'Electronics',
        pPrice:150000,
        pIsInStock:true,
        pManufacturer:{
            mName:'Apple',
            mCountry:'US',
            mFounder:'Steve Jobs',
            mOtherProducts:['Air Pods','IPad','Apple TV','Mac Book']
        }
    }


    render(){
        return(<div>
            <h1> { this.developer }</h1>
            <h1> { this.componentName } </h1>
            {/* <ul>
                { this.productCategory.map(p =>  <li> { p } </li>) }
            </ul> */}
            {/* <select>
                { this.productCategory.map(p =>  <option> { p } </option> ) }
            </select> */}           
                {/* <div className="productDetails">
                    <h1> Product Id : { this.productDetails.pId } </h1>
                    <h1> Product Name : { this.productDetails.pName } </h1>
                    <h1> Product Category : { this.productDetails.pCategory } </h1>
                    <h1> Product Price : { this.productDetails.pPrice } </h1>
                    <h1> Product Discount :  15%  </h1>
                    <h1> Product Offer Price : { this.productDetails.pPrice - this.productDetails.pPrice * 15 / 100 } </h1>
                    <h1> Product Is In Stock : { this.productDetails.pIsInStock ? 'Yes':'No' } </h1>
                    <div className="manufacturerDetails">
                        <h2> Manufacturer : { this.productDetails.pManufacturer.mName } </h2>
                        <h2> Country Of Origin: { this.productDetails.pManufacturer.mCountry } </h2>
                        <h2> Founder : { this.productDetails.pManufacturer.mFounder } </h2>
                        Other products : <ul> { this.productDetails.pManufacturer.mOtherProducts.map(p => <li> {p}</li>) } </ul>
                    </div> */}

                    <table border="1">
                        { this.productList.map( p => <tr> 
                            <td> { p.pId } </td>
                            <td> { p.pName } </td>
                            <td> { p.pCategory } </td>
                            <td> { p.pPrice } </td>
                            <td> { p.pDiscount } % </td>
                            <td> { p.pPrice - (  p.pPrice * p.pDiscount / 100 )} </td>
                            <td> { p.pIsInStock ? 'Yes':'No' } </td>
                        </tr>) }
                    </table>
                </div>
        )
    }

}


export default Products;