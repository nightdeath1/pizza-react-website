import React from 'react'
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements'

const Products = ({heading, data, id}) => {
  return (
    <ProductsContainer id={id}>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
            {data.map((product, index) => {
                return (
                    <ProductCard key={index} id={product.id}>
                        <ProductImg src={product.img} alt={product.alt} />
                        <ProductInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton>{product.button}</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                )
            })}
        </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products
