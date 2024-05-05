import { createLazyFileRoute } from '@tanstack/react-router'
import { loginForm } from '../components/login-form'

export const Route = createLazyFileRoute('/login')({
  component: loginForm 
})
