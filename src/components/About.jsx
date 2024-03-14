import hero from '../assets/fotor-2024031215433.png'

export const About = () => {
    return <div className='flex h-screen'>
        <div className='flex-1'>
            <img className='w-80 ml-40 mt-40' src = {hero}></img>
        </div>
        <div className='flex-1 mt-6'>
            <div className='text-6xl font-extrabold'>   
                DevBot
            </div>
            <div className='mt-2'>
                <p>
                In the fast-paced world of software development, career navigation can be daunting, especially for newcomers like junior developers, bootcamp graduates, and university students. To address this challenge, I've developed an AI Software Development Career Helper using OpenAI's advanced technology. This chatbot offers personalized career guidance, leveraging a finely-tuned model to provide tailored insights, advice, and support.
                </p>
            </div>
            <div className='mt-4'>
                <div className='text-2xl font-bold'>
                    Key Features
                </div>
                <div className='mt-2'>
                    <ul>
                        <li>
                        <b>Personalized Career Advice:</b> Our chatbot offers tailored advice on resume optimization, interview strategies, and job search tactics based on a diverse dataset of career scenarios. Whether you're exploring programming languages, portfolio projects, or career transitions, our AI assistant provides informed recommendations.
                        </li>
                        <li className='mt-1'>
                        <b>Industry Insights and Trends:</b> Stay updated on the latest software development trends, emerging technologies, and sought-after skills. Our chatbot delivers AI-driven insights to help align your career path with the evolving tech landscape.
                        </li>
                        <li className='mt-1'>
                        <b>Interactive Learning Experience:</b> Engage in dynamic dialogues with our chatbot to explore career pathways, deepen your understanding of software development, and refine your strategies. Through personalized conversations, users can receive AI-generated feedback and suggestions to enhance their career journey.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
}