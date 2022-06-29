const initState = {
    products:[
        {
            id: 1,
            name: 'AERO Chest Embroidery Graphic Tee',
            image: 't1.jpg',
            price: 24.99,
            discount: 4,
            discountPrice: 24.99 - 4 / 100 * 24.99,
            quantity: 1,
            description: 'This cool, comfy tee is always a good match for jeans and sweats.',
            fit: 'Classic fit and Crew neck',
            care: '60% Cotton, 40% Polyester Machine wash in cold water inside out. Tumble dry low. Low iron. No bleach.'
        },

        {
            id: 2,
            name: 'Aéropostale 87 NYC Graphic Tee',
            image: 't2.jpg',
            price: 25.99,
            discount: 4,
            discountPrice: 25.99 - 4 / 100 * 25.99,
            quantity: 1,
            description: 'This cool, comfy tee is always a good match for jeans and sweats.',
            fit: 'Classic fit and Crew neck',
            care: '60% Cotton, 40% Polyester Machine wash in cold water inside out. Tumble dry low. Low iron. No bleach.'
        },

        {
            id: 3,
            name: 'Patrick Multi Spiral Tie Graphic Tee',
            image: 't3.jpg',
            price: 29.99,
            discount: 4,
            discountPrice: 29.99 - 4 / 100 * 29.99,
            quantity: 1,
            description: 'With graphic tees this cool, how could you not want another? Rock it with destroyed jeans and joggers.',
            fit: 'Classic fit and Crew neck',
            care: '60% Cotton, 40% Polyester Machine wash in cold water inside out. Tumble dry low. Low iron. No bleach.'
        },

        {
            id: 4,
            name: 'Tie Dye Kelloggs Pop Graphic Tee',
            image: 't4.jpg',
            price: 29.99,
            discount: 4,
            discountPrice: 29.99 - 4 / 100 * 29.99,
            quantity: 1,
            description: 'This graphic tee brings back some good memories! Featuring a fave breakfast treat that made your mornings extra sweet.',
            fit: 'Classic fit and Crew neck',
            care: '60% Cotton, 40% Polyester Machine wash in cold water inside out. Tumble dry low. Low iron. No bleach.'
        },

        {
            id: 5,
            name: 'Grinch Red Tie Dye Graphic Tee',
            image: 't5.jpg',
            price: 30.99,
            discount: 4,
            discountPrice: 30.99 - 4 / 100 * 30.99,
            quantity: 1,
            description: 'Happy holidays from the Grinch himself! Even a holiday graphic tee can put a smile on his face.',
            fit: 'Classic fit and Crew neck',
            care: '60% Cotton, 40% Polyester Machine wash in cold water inside out. Tumble dry low. Low iron. No bleach.'
        },


        {
            id: 6,
            name: 'Long Sleeve Graphic Tee',
            image: 't6.jpg',
            price: 20.99,
            discount: 4,
            discountPrice: 20.99 - 4 / 100 * 20.99,
            quantity: 1,
            description: 'With graphic tees this cool, how could you not want another? Rock it with destroyed jeans and joggers.',
            fit: 'Classic fit and Crew neck',
            care: '60% Cotton, 40% Polyester Machine wash in cold water inside out. Tumble dry low. Low iron. No bleach.'
        },


    ],

    product:{}
}

const ProductsReducerM = (state = initState, action) =>{
    switch(action.type){

        case "PRODUCT":
            return {
                ...state, product: state.products.find(product => 
                    product.id === parseInt (action.id))
            }


        default:
        return state;

    }

    
}

export default ProductsReducerM 