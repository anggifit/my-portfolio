
const Homepage = () => {
    return (
        <div>
            <div className="flex h-screen w-screen relative">
                <div className="w-1/2 bg-primary"></div>
                <div className="w-1/2 bg-secondary"></div>
            </div>
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-luminosity">
                <img 
                    className="w-[546px] h-[513px] rounded-full shadow"
                    src="/profilepic.jpeg"    
                />
            </div>
        </div>
    )
}

export default Homepage
