
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const AuthorShow = () => {
    const [mydata, setmydata] = useState([]);
    const [show, setshow] = useState(false);
    const [authId, setauthId] = useState("");
    const [bookname, setbookname] = useState("");
    const [price, setprice] = useState("");


    const handleClose = () => setshow(false);

    const hanldeShow = (id) => {
        setshow(true);
        setauthId(id);  // when add book form open author id set in variable.
    };

    const submitBook = async (e) => {
        e.preventDefault(); 
        let api = `${import.meta.env.VITE_BACK}/author/savemany1`;
        const response = await axios.post(api, { authId, bookname, price}); 
        console.log(response.data); 
        setshow(false);  
    }

    const loadData = async () => {
        let api = `${import.meta.env.VITE_BACK}/author/displaymany1`;
        const response = await axios.get(api);
        console.log(response.data.msg);
        setmydata(response.data.author);
    }

    useEffect(() => {
        loadData();
    }, [])


    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td> {key._id} </td>
                    <td> {key.authorname} </td>
                    <td> {key.email} </td>
                    <td style={{ width: "200px"}}>
                        {key.booksid.map((each) => {
                            return (
                                <>
                                    <p> Title: {each.title}, price: {each.price} </p>
                                </>
                            )
                        })}
                    </td>
                    <td>
                        <button onClick={() => hanldeShow(key._id)}>Add</button>
                    </td>

                </tr>
            </>
        )
    })


    return (
        <>
            <div>
                <h1> Show books according to author and Add more books </h1>

                <hr />
                <table border={1} width={800} align='center' >
                    <tr>
                        <th>Auth Id</th>
                        <th>Author</th>
                        <th>Email</th>
                        <th>Books</th>
                        <th>Add Books</th>
                    </tr>
                    {ans}
                </table>
                <hr />

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> Add More Books </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter Book name</Form.Label>
                                <Form.Control type="text" value={bookname} onChange={(e) => setbookname(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter Book price</Form.Label>
                                <Form.Control type="text" value={price} onChange={(e) => setprice(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={submitBook}  >
                                Submit
                            </Button>

                        </Form>
                    </Modal.Body>
                </Modal>


            </div>
        </>
    )
}

export default AuthorShow; 
