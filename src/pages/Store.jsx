import React, { useEffect, useState } from 'react';
import ProductCards from '../components/ProductCards'
import Filter from '../components/Filter'
import { useSelector } from 'react-redux';
import { Button, Form, InputGroup } from 'react-bootstrap';

const Store = () => {
    const products = useSelector(state => state.products)
    const categories = useSelector(state => state.categories)
    const [filteredProducts, setFilteredProducts] = useState()
    const [input, setInput] = useState("")
    
    useEffect(() => { searchAll() }, [products])

    const searchAll = () => setFilteredProducts(products)
    
    const filterCategory = (categoryId) => {
        // if id === -1 search all, else: search filtered
        if (categoryId !== -1) {
            const filteredFound = products.filter(product => product.category.id == categoryId)
            setFilteredProducts(filteredFound)
        } else {
            searchAll()
        }
    }

    const filterPrice = (minValue, maxValue) => {
        if (maxValue <= 0) searchError()
        else if (minValue < 0) searchError()
        else if (maxValue < minValue) searchError()
        else if (minValue > 1500) searchError()
        else { //Filter List
            const filteredFound = filteredProducts.filter(product => parseInt(product.price) > minValue && parseInt(product.price) < maxValue)
            setFilteredProducts(filteredFound)
        }
    }

    const search = () => {
        const filteredFound = products.filter(product => product.title.toLowerCase().includes(input.toLowerCase()))
        setFilteredProducts(filteredFound)
    }

    const searchError = () => alert("Search Error")

    return (
        <div className='store_container background2'>
            <div className='filter_container'>
                <Filter
                    categories={categories}
                    filterCategory={filterCategory}
                    filterPrice={filterPrice}
                    searchAll={searchAll}
                />
            </div>

            <div className='content_div'>
                <div className='search_div background'>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Search Product"
                            aria-describedby="basic-addon2"
                            value={input}
                            onChange={ev => setInput(ev.target.value)}
                        />

                        <Button
                            variant="info"
                            id="button-addon2"
                            className='search_button buttonbg'
                            onClick={() => search()}
                        >
                            Search
                        </Button>
                    </InputGroup>
                </div>

                <div className='products_position-fixer background'>
                    <div className='products_container'>
                        <ProductCards
                            products={filteredProducts}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Store;