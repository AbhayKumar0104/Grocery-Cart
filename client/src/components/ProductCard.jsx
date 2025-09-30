import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
    const [count, setCount] = React.useState(0);
    const {
        currency,
        addToCart,
        updateCartItem,
        removeFromCart,
        cartItems,
        navigate,
    } = useAppContext();

    return product && (
        <div
            onClick={() => {
                navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
                scrollTo(0, 0);
            }}
            className="bg-white rounded-md border border-gray-200 p-2 sm:p-3 md:p-4 w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] hover:shadow-md transition-shadow cursor-pointer"
        >
            {/* Image Section */}
            <div className="group flex items-center justify-center mb-2">
                <img
                    className="group-hover:scale-105 transition-transform duration-300 w-full max-h-36 object-contain"
                    src={product.image[0]}
                    alt={product.name}
                />
            </div>

            {/* Product Info */}
            <div className="text-gray-600 text-sm space-y-1">
                <p>{product.category}</p>
                <p className="text-gray-800 font-medium text-base sm:text-lg truncate">{product.name}</p>

                {/* Ratings */}
                <div className="flex items-center gap-1">
                    {Array(5).fill('').map((_, i) => (
                        <img
                            key={i}
                            className="w-4 sm:w-3.5"
                            src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                            alt="rating"
                        />
                    ))}
                    <p className="text-xs text-gray-500">(4)</p>
                </div>

                {/* Price + Cart Section */}
                <div className="flex items-end justify-between mt-3">
                    <p className="text-primary text-base sm:text-lg font-medium">
                        {currency}{product.offerPrice}{" "}
                        <span className="text-gray-400 text-xs sm:text-sm line-through">
                            {currency}{product.price}
                        </span>
                    </p>

                    <div onClick={(e) => e.stopPropagation()} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button
                                className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 w-16 sm:w-20 h-8 rounded text-xs sm:text-sm"
                                onClick={() => addToCart(product._id)}
                            >
                                <img src={assets.cart_icon} alt="cart" className="w-4 h-4" />
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 w-16 sm:w-20 h-8 bg-primary/20 rounded select-none text-sm">
                                <button
                                    onClick={() => removeFromCart(product._id)}
                                    className="px-2 text-base font-medium"
                                >
                                    -
                                </button>
                                <span className="w-4 text-center">{cartItems[product._id]}</span>
                                <button
                                    onClick={() => addToCart(product._id)}
                                    className="px-2 text-base font-medium"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
