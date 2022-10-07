import React, { useState } from 'react';
import { Accordion, Button, Form, InputGroup, ListGroup } from 'react-bootstrap';

const Filter = ({ categories, filterCategory, filterPrice, searchAll }) => {
    const [maxValue, setMaxValue] = useState(0)
    const [minValue, setMinValue] = useState(0)
    const clearFilter = () => {
        setMinValue(0)
        setMaxValue(0)
        searchAll()
    }
    return (
        <Accordion alwaysOpen flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='background2'>Price</Accordion.Header>
                <Accordion.Body>
                    <ListGroup className="accordion_list">
                        <ListGroup.Item className='accordion_list_item'>
                            <span>From</span>
                            <InputGroup size="sm" className="mb-3 filter_Input">
                                <InputGroup.Text id="inputGroup-sizing-sm">$</InputGroup.Text>
                                <Form.Control
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    onChange={ev => setMinValue(ev.target.value)}
                                    value={minValue}
                                    type='number'
                                />
                            </InputGroup>
                        </ListGroup.Item>

                        <ListGroup.Item className='accordion_list_item'>
                            <span>To</span>
                            <InputGroup size="sm" className="mb-3 filter_Input">
                            <InputGroup.Text id="inputGroup-sizing-sm">$</InputGroup.Text>
                                <Form.Control
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    onChange={ev => setMaxValue(ev.target.value)}
                                    value={maxValue}
                                    type='number'
                                />
                            </InputGroup>
                        </ListGroup.Item>

                        <ListGroup.Item className='accordion_list_item filter-button_Container'>
                            <Button className='buttonbg' variant="info" onClick={() => clearFilter()}>Clear</Button>
                            <Button className='buttonbg' variant="info" onClick={() => filterPrice(minValue, maxValue)}>Filter</Button>
                        </ListGroup.Item>
                    </ListGroup>

                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="1">
                <Accordion.Header>Category</Accordion.Header>

                <Accordion.Body>
                    <ListGroup className="accordion_list category_list">
                        <ListGroup.Item
                            action
                            className='accordion_list_item'
                            onClick={() => filterCategory(-1)}
                        >
                            All
                        </ListGroup.Item>

                        {
                            categories?.map(category => (
                                <ListGroup.Item
                                    key={category.id}
                                    action
                                    className='accordion_list_item'
                                    onClick={() => filterCategory(category.id)}
                                >
                                    {category.name}
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Filter;