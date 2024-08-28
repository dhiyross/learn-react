import googleLogo from 'C:/Users/YOGA 6/Music/learn-GIT/google-clone-news/src/assets/google-logo.png';
import icnSearch from 'C:/Users/YOGA 6/Music/learn-GIT/google-clone-news/src/assets/icn_search.png';

const Navbar = () => {
    return(
        <div className='bg-white flex items-center justify-center p-6 w-screen sticky'>
            <div className='flex item-center ml-5'>
                <img src= {googleLogo} className='w-20'/>
                <h1 className='text-gray-500 text-2xl font-medium ml-3'>News</h1>
            </div>
            <div className='ml-32 bg-zinc-100 flex items-center border border-spacing-1 p-3 w-6/12 rounded-ld'>
            <img src={icnSearch} className='w-5 h-5'/>
            <input placeholder='Search for news' className='ml-4 bg-zinc-100'/>
            </div>
            <button className='ml-44 bg-blue-600 text-white p-2 w-28 rounded-md'> Sign In</button>
        </div>
    );
}

export default Navbar;