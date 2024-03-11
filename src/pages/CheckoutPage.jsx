
import { useContext } from "react";
import { BasketContext } from "../context/basketContext"
import BasketItem from '../components/BasketItem';



const CheckoutPage = () => {
    const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

    const totalAmount = basket.reduce((total, i) => total + i.amount, 0)


    const totalPrice = basket.reduce((total, i) => total + i.price * i.amount, 0)

    return (
        <div className="container my-5">
            {/* sepette ürün yoksa */}
            {basket.lengt === 0 && (
                <p>
                    <span>Öncelikle sepete bir ürün ekleyiniz.</span>
                    <Link to={'/'}>Ürünler</Link>
                </p>
            )}




            <div className="d-flex flex-column gap-5">

                {/* sepette ürün varsa */}
                {basket.map((item) => (
                    <BasketItem
                        key={item.id}
                        item={item}
                        addToBasket={addToBasket}
                        removeFromBasket={removeFromBasket}

                    />
                ))}
            </div>

            <div className="border p-5 my-5 fs-4">
                <p>Sepetteki Ürün: <span className="text-warning">{totalAmount}</span> adet  </p>
                <p>Toplam Fiyat:  <span className="text-success">{totalPrice.toFixed(2)} tl</span> </p>
            </div>
        </div>
    )
}

export default CheckoutPage