import React from "react";
import { Grid } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://cdn.runrepeat.com/storage/gallery/product_primary/35537/nike-pegasus-37-photo-15929328-720.jpg'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://images.macrumors.com/t/PJemPEph0tylNgWFGNZ8o-JjfcI=/2769x/article-new/2013/09/16-inch-macbook-pro.jpg'},
]

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
        )
}

export default Products