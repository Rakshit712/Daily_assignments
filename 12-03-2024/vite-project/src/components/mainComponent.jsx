
const shoeList = [
    {
     "name": "Nike React Infinity Run Flyknit",
     "category": "RUNNING",
     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg"
   },
   {
     "name": "Nike React Miler",
     "category": "RUNNING",
    
     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg"
   },
    {
     "name": "Nike Air Zoom Pegasus 37",
     "category": "RUNNING",
     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg"
   },
  {
     "name": "Nike Joyride Run Flyknit",
     "category": "RUNNING",
     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg"
   },
   {
     "name": "Nike Mercurial Vapor 13 Elite FG",
     "category": "FOOTBALL",
     "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg"
   }
 ]

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
    <div className="container">
        <h1 >Related Items</h1>
        <div className="arrayList">
            {shoeList.map((shoe) =>(
                <div className="card" style={{height:"450px", width:"450px"}}>
                    <img className="itemImage" src={shoe.imageURL} alt={shoe.name} style={{height:"250px", width:"250px"}}></img>
                    <h2>{shoe.name}</h2>
                    <p>{"Category :   "+ shoe.category}</p>
                    <button className="login">Buy Now</button>
                </div>

            ))}

        </div>
    </div>
    </>

}
export default MainComponent;