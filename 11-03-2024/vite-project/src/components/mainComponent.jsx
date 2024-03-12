function MainComponent (){
    return <>
    <div className="container MainComponent"> 
        <div>
            <h1 className="head">YOUR FEET DESERVE THE BEST</h1>
            <p className="discription">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="buttons">
                <button className="login">Shop Now</button>
                <button className="login">Catagory</button>
            </div>
            <div className="iconBox">
                <p>Also available on</p>
                <div className="icons">
                    <img src="/images/amazon.png" alt="amazon logo"></img>
                    <img src="/images/flipkart.png" alt="flipkart logo"></img>
                </div>
                
            </div>
        </div>
        <div className="shoeImage">
            <img className="shoee" src="/images/shoe_image.png" alt="shoe image"></img>

        </div>
    </div>
    </>

}
export default MainComponent;