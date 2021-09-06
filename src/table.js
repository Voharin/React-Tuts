import React, { Component } from 'react'
import Grid from '@material-ui/core';
import Data from './api/products.json';
import './App.css';

  class Table extends Component {
      constructor(props){
          super(props)
          this.state={
              products: [],
              isLoading: false,
              isError: false
          }
      }
    

      async componentDidMount(){
          this.setState({isLoading: true})
          const response = await fetch('http://localhost:3001/products')
          if(response.ok){
              const products = await response.json()
              this.setState({products,isLoading: false})
            }
              else{
                  this.setState({isLoading: true, isLoading: false})
              }
          }

          render() {
            const {products,isLoading, isError} = this.state 
  
            if(isLoading) {
                return <div>Loading...</div>
              
            }
            if(isError){
                return <div>Error</div>
            }
            return products.length > 0
            ?(
              <table>
                  <thead>
                      <tr>
                          {this.renderTableHeader()}
                      </tr>
                  </thead>
                  <tbody>
                    {this.renderTableRows()}  
                  </tbody>
              </table>
            ):(
                <div> No Product Found </div>
            )
          
          }
      

      renderTableHeader = () => {
        
        return Object.keys(this.state.products[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>) 

      }

      renderTableRows = () => {
          return this.state.products.map(product =>{
              return(
                  <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.brand}</td>
                      <td>{product.price}</td>
                      <td>{product.whosale}</td>
                      <td>{product.quantity}</td>
                  </tr>
              )
          })
          
      }

    
  }

  export default Table