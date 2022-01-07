import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'

export default function Signup() {
    return (
        <div>
<Card>
    <Card.Body>
        <h2 className='text-cneter mb-4'>
            Sign Up
        </h2>
        <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required></Form.Control>
        </Form.Group>
        <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required></Form.Control>
        </Form.Group>
        <Form.Group id="password-confirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" ref required></Form.Control>
        </Form.Group>
        <Button className='w-100' type='submit'>Sign Up</Button>
    </Card.Body>
</Card>
<div className='w-100 text-center mt-2'>
Already have an account? Login Link;)
</div>
        </div>
    )
}