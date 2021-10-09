import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const TestHtmlToPdf = ()=>{

    const data = {
        name: "Sagar Telrandhe",
        age:'26',
        contact:'8888102551',
        company:'Codegrabs IT Solutions',
        location: 'Nagpur'
    };

    const htmlContent=`
    
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Codegrabs IT Solutions</title>
                <style>
                    body{
                        background-color: #F6F6F6; 
                        margin: 0;
                        padding: 0;
                    }
                    h1,h2,h3,h4,h5,h6{
                        margin: 0;
                        padding: 0;
                    }
                    p{
                        margin: 0;
                        padding: 0;
                    }
                    .container{
                        width: 80%;
                        margin-right: auto;
                        margin-left: auto;
                    }
                    .brand-section{
                    background-color: #0d1033;
                    padding: 10px 40px;
                    }
                    .logo{
                        width: 50%;
                    }

                    .row{
                        display: flex;
                        flex-wrap: wrap;
                    }
                    .col-6{
                        width: 50%;
                        flex: 0 0 auto;
                    }
                    .text-white{
                        color: #fff;
                    }
                    .company-details{
                        float: right;
                        text-align: right;
                    }
                    .body-section{
                        padding: 16px;
                        border: 1px solid gray;
                    }
                    .heading{
                        font-size: 20px;
                        margin-bottom: 08px;
                    }
                    .sub-heading{
                        color: #262626;
                        margin-bottom: 05px;
                    }
                    table{
                        background-color: #fff;
                        width: 100%;
                        border-collapse: collapse;
                    }
                    table thead tr{
                        border: 1px solid #111;
                        background-color: #f2f2f2;
                    }
                    table td {
                        vertical-align: middle !important;
                        text-align: center;
                    }
                    table th, table td {
                        padding-top: 08px;
                        padding-bottom: 08px;
                    }
                    .table-bordered{
                        box-shadow: 0px 0px 5px 0.5px gray;
                    }
                    .table-bordered td, .table-bordered th {
                        border: 1px solid #dee2e6;
                    }
                    .text-right{
                        text-align: end;
                    }
                    .w-20{
                        width: 20%;
                    }
                    .float-right{
                        float: right;
                    }
                </style>
            </head>
            <body>

                <div class="container">
                    <div class="brand-section">
                        <div class="row">
                            <div class="col-6">
                                <h1 class="text-white">Codegrabs IT Solutions</h1>
                            </div>
                            <div class="col-6">
                                <div class="company-details">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="body-section">
                        <div class="row">
                            <div class="col-6">
                                <h2 class="heading">Invoice No.: 786</h2>
                                <p class="sub-heading">Tracking No. Codegrabs2025 </p>
                                <p class="sub-heading">Order Date: 09-10-2021 </p>
                                <p class="sub-heading">Email Address: help@codegrabs.com </p>
                            </div>
                            <div class="col-6">
                                <p class="sub-heading">Full Name: Ganesh Godshelwar  </p>
                                <p class="sub-heading">Address: Nagpur </p>
                                <p class="sub-heading">Phone Number: 8668371248 </p>
                                <p class="sub-heading">City,State,Pincode: Nagpur, Maharashtra, 440012  </p>
                            </div>
                        </div>
                    </div>

                    <div class="body-section">
                        <h3 class="heading">Ordered Items</h3>
                        <br>
                        <table class="table-bordered">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th class="w-20">Price</th>
                                    <th class="w-20">Quantity</th>
                                    <th class="w-20">Grandtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Samsung Screen 27"" </td>
                                    <td>10</td>
                                    <td>1</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td colspan="3" class="text-right">Sub Total</td>
                                    <td> 21000.00</td>
                                </tr>
                                <tr>
                                    <td colspan="3" class="text-right">Tax Total %8</td>
                                    <td> 1</td>
                                </tr>
                                <tr>
                                    <td colspan="3" class="text-right">Grand Total</td>
                                    <td> 22,680.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                        <h3 class="heading">Payment Status: Paid</h3>
                        <h3 class="heading">Payment Mode: Cash on Delivery</h3>
                    </div>

                    <div class="body-section">
                        <p>&copy; Copyright 2021 - Codegrabs. All rights reserved. 
                            <a href="https://www.codegrabs.com/" class="float-right">www.codegrabs.com</a>
                        </p>
                    </div>      
                </div>      

            </body>
            </html>
`;
    

    const CreatePdF = async()=>{
        
            let options = {
                // html: '<h1>Codegrabs IT Solutions</h1>',
                html:htmlContent,
                fileName: 'Codegrabs Invoice',
                directory: 'Documents',
              };
          
              let file = await RNHTMLtoPDF.convert(options)
              console.log(file.filePath);
              alert(file.filePath);
        
    }

    return(
        <View style={{flex:1,
            backgroundColor:'steelblue',
            justifyContent:'center',
             alignItems:'center'
           }}>
            <TouchableOpacity onPress={()=>CreatePdF()}>
                 <Text style={{fontSize:35, color:'#FFFFFF', fontWeight:'900'}}>Export Pdf</Text>
            </TouchableOpacity>
        </View>
    )
}



export default TestHtmlToPdf; 