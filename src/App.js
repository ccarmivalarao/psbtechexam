import './App.css';
import CartForm from './components/CartForm'
import CartPayment from './components/CartPayment';
import CartTable from './components/CartTable';
import {useState, useEffect} from 'react'
import {DATA} from './mock';

const App = () => {
  const [searchedId, setSearched] = useState('');
  const [productData, setProductData] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedQty, setQty] = useState(0)
  const [totalAmount, setTotal] = useState(0)
  const [cash, setCash] = useState(0)
  const [change, setChange] = useState(0)

  const onSearch = () => {
    if (searchedId > 1000) {
      alert('There are no product available for that id.')
      setSearched('')
    } else {
      setProductData(DATA.find(prod => prod.id === Number(searchedId)))
    }
  }

  const onAddCart = (e) => {
    e.preventDefault()
    if (!!cart.find(item => productData.id === item.id)) {
      var cartItem = cart.find(item => productData.id === item.id)
      cartItem = {
        ...cartItem,
        quantity: Number(selectedQty) + Number(cartItem.quantity), 
        amount: (Number(productData.cost) * Number(selectedQty + cartItem.quantity).toFixed(2))
      }      
      const newCart = cart.map(item => {
        if (item.id === cartItem.id) {
          return cartItem
        } else {
          return item
        }
      })

      setCart(newCart)
    } else {
      const newCart = [
      ...cart, 
        {
          ...productData, 
          quantity: selectedQty, 
          amount: (Number(productData.cost) * Number(selectedQty).toFixed(2))
        }
      ]
      setCart(newCart)
    }
    setQty(0)
    setProductData(null)
    setSearched('')
  }

  const onRemoveFromCart = item => {
    const newCart = cart.filter(prod => prod.id !== item.id);
    setCart(newCart)
  }

  const onChangeCash = e => {
    setCash(e.target.value);
    setChange((Number(e.target.value) - Number(totalAmount)).toFixed(2))
  }

  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total = total + item.amount
    })
    setTotal(total.toFixed(2))
  }, [cart])

  return (
    <>
      <CartForm 
        searched={searchedId} 
        onChangeSearch={e => setSearched(e.target.value)} 
        onSearch={() => onSearch()}
        productData={productData}
        onAddCart={(e) => onAddCart(e)}
        quantityValue={selectedQty}
        onChangeQty={e => setQty(e.target.value)}
      />
      <CartTable 
        cart={cart}
        onRemoveFromCart={item => onRemoveFromCart(item)}  
      />
      <CartPayment 
        total={totalAmount}
        onChangeCash={e => onChangeCash(e)}
        cash={cash}
        change={change}
      />
    </>
  );
}

export default App;
