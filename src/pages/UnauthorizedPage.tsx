import { useNavigate } from 'react-router-dom'

export default function UnauthorizedPage() {
    const navigate = useNavigate()

    return(
        <>
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <h1 className='text-3xl font-bold text-red-600'>
                Access Denied
            </h1>
            <p className='text-gray-500'>
                You do not have the permission to view this page.
            </p>
            <button onClick={() => navigate(-1)} className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                Go Back
            </button>
        </div>
        </>
    )
}