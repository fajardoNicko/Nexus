import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

export default function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<String | null>(null)

    async function handleLogin() {
        setLoading(true)
        setError(null)
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            navigate('/')   
        }
    }

    async function handleGoogleLogin() {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: `${window.location.origin}/`}
        })
    }

    
}