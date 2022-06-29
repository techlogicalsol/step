const initState = {
    products:[
        {
            id: 13,
            name: 'North Western Micro',
            image: 'a1.jpg',
            price: 20.99,
            discount: 6,
            discountPrice: 20.99 - 6 / 100 * 20.99,
            quantity: 1,
            description: 'Check out this micro plaid shirt made from 100% recycled cotton. It is eco-friendly and a seasonal fave!',
            fit: 'Relaxed fit and button-up',
            care: '100% Recycled Cotton Flannel. Tumble dry low. Low iron. No bleach.'
        },

        {
            id: 14,
            name: 'North Western 2 Pocket',
            image: 'a2.jpg',
            price: 25.99,
            discount: 6,
            discountPrice: 25.99 - 6 / 100 * 25.99,
            quantity: 1,
            description: 'Check out this micro plaid shirt made from 100% recycled cotton. It is eco-friendly and a seasonal fave!',
            fit: 'Relaxed fit and button-up',
            care: '100% Recycled Cotton Flannel. Tumble dry low. Low iron. No bleach.'
        },

        {
            id: 15,
            name: 'North Plaid Flannel',
            image: 'a3.jpg',
            price: 10.99,
            discount: 6,
            discountPrice: 10.99 - 6 / 100 * 10.99,
            quantity: 1,
            description: 'Check out this micro plaid shirt made from 100% recycled cotton. It is eco-friendly and a seasonal fave!',
            fit: 'Relaxed fit and button-up',
            care: '100% Recycled Cotton Flannel. Tumble dry low. Low iron. No bleach.'
        },

        {
            id: 16,
            name: 'North Western Hooded',
            image: 'a4.jpg',
            price: 23.99,
            discount: 6,
            discountPrice: 23.99 - 6 / 100 * 23.99,
            quantity: 1,
            description: 'Your flannel now has a hood, making it a cold weather must-have.',
            fit: 'Relaxed fit and button-up',
            care: '100% Recycled Cotton Flannel. Tumble dry low. Low iron. No bleach.'
        },


    ],

    product:{}


}

const ProductsReducerA = (state = initState, action)=>{

    switch(action.type){

        case 'PRODUCT':
            return{
                ...state, product: state.products.find(
                    product => product.id === parseInt (action.id))
            }

        default:
            return state;
    }



   
}


export default ProductsReducerA