import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

export const SignUp = () => <Button variant='nav-bar-signup'>SIGN UP</Button>
export const Logout = () => <Button variant='nav-logged-in'>logout</Button>
export const GetStarted = () => <Button variant='cta'>GET STARTED!</Button>
export const OK = () => <Button variant='ok'>OK</Button>
export const Next = () => <Button variant='card-mover'>next</Button>
export const Previous = () => <Button variant='card-mover'>back</Button>
export const Submit = () => <Button variant='submit'>Submit</Button>
export const Close = () => <Button variant='close'>X</Button>