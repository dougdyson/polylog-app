import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

export const SignUp = () => <Button variant='nav-bar'>SIGN UP</Button>
export const Logout = () => <Button variant='nav-logged-in'>LOGOUT</Button>
export const GetStarted = () => <Button variant='cta'>GET STARTED!</Button>
export const OK = () => <Button variant='ok'>OK</Button>
export const Next = () => <Button variant='card-mover'>∨</Button>
export const Previous = () => <Button variant='card-mover'>∧</Button>
export const Submit = () => <Button variant='submit'>Submit</Button>