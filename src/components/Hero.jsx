import icon from '../assets/fotor-2024031211399.png'

export const Hero = () => {
    return <div className="flex-col justify-center mt-6">
        <div className='flex w-screen justify-center'>
            <img className='w-40' src = {icon}></img>
        </div>
        <div className='flex w-screen justify-center mt-4 text-3xl font-bold'>
            Talk to DevBot
        </div>
        <div className='flex w-screen justify-center mt-4 text-xl'>
            Ask any software engineering career related questions 
        </div>
    </div>
}