import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

/*
* Context API
* Uygulamada birden çok bileşen ihtiyacı olan verileri bileşenlerden bağımsız bir şekilde onumlanan merkezlerde önetmeye yarar.

* context yapısı içeriisnde verilerin statini ve verileri deiştirmeye yarayan fonksiyonlar tutulabilir.
* context tuttuğumuz değişkenleri bileşenlere doğrudan aktarım yapabilen merkezi state yönetim aracıdır

*/

//! context yapısının temelini oluşturma
export const ProductContext = createContext();

//! sağlayıcı ve onun tutuğu verileri tanımla
export function ProductProvider({ children }) {
    const [products, setProducts] = useState(null);
    const [category, setCategory] = useState("all");

    useEffect(() => {
        //önceki ürünleri kaldır
        setProducts(null)
        // hangi urlye istek atılacağını belirle
        const url =
            category === "all"
                ? "https://fakestoreapi.com/products"
                : `https://fakestoreapi.com/products/category/${category}`;
        //api isteği at
        axios.get(url).
            then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
    }, [category]);

    //context yapısında tuttuğumuz verileri bileşenler sağla
    // value olarak eklenen veriler projede ki bütün bileşenler tarafından eişilebilir olur.

    // context yapısında tuttuğumuz verileri bileşenlere sağla
    return (
        <ProductContext.Provider value={{ products, category, setCategory }}>
            {children}
        </ProductContext.Provider>
    );
}
