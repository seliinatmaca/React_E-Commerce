import Loader from "../components/Loader"
import Card from "../components/Card"
//1) bir context yapısına abone olmamızı sağlar.

import { useContext } from "react"

//2) abone oolmak istediğimiz contexti çağır
import { ProductContext } from "../context/productContext"




const HomePage = () => {
    // context yapısında tutulan bir veriye projedeki bileşen içeriisinde erişmek istiyorsak
    // ilgili context yapısına abone oluruz.

    const { products, category } = useContext(ProductContext)



    return (
        <div className="container">
            <h2 className="my-4">{category && category}</h2>
            <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5">

                {!products && <Loader />}


                {/* veriler geldiyse herbiri için kart bas */}

                {products?.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div >
        </div>
    )
}

export default HomePage