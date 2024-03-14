import icon from '../assets/fotor-2024031211399.png'
import { useNavigate } from 'react-router-dom';


export const NavBar = () => {
    const navigate = useNavigate();

    return <div className="grid grid-cols-12 pb-4 border-b-2 bg-gradient-to-r from-customOrange to-customRed">
        <div className='col-span-2 col-start-2'>
            <img className='w-15 mt-2' src = {icon}></img>
        </div>

        <div className='col-span-5 ml-36 flex justify-center gap-3 mt-6'>
            <button onClick = {() => navigate('/about')} className='flex justify-center bg-white h-7 px-3 rounded-md'>
                About
            </button>
            <button className='flex justify-center bg-white h-7 px-3 rounded-md'>
                References
            </button>
        </div>
        <div onClick = {()=> navigate('/')} className='col-span-3 col-start-11 justify mt-6 bg-white h-7 w-fit px-3 rounded-md'>
            <button>
                Get Started
            </button>
        </div>
        
    </div>
}