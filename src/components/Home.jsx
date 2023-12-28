import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <ul><Link to="/products">Products</Link></ul>
        <ul><Link to="/cart">Cart</Link></ul>
    </div>
  )
}

export default Home
