import React from 'react';
import Grid from '@material-ui/core';


const products = [
    { id : 1, name: 'Shoes', description: 'Running Shoes'},
    { id : 2, name: 'Phone', description: 'Smart Phone'},
    { id : 3, name: 'Laptop', description: 'Gaming Laptop'},
    { id : 4, name: 'TV', description: 'OLED TV'}
]


const Products = () => {
    <main>
        <Grid container justify = "center" spacing = {4}>
            {products.map((product) => (
                <Grid item key = {product.id} xs = {12} md = {4} lg={3}>

                    <Product/>

                </Grid>
            ))}
        </Grid>
    </main>

}