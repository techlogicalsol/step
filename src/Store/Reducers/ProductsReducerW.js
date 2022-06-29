const initState = {
    products:[
        {
            id: 7,
            name: 'Mean Girls Boyfriend Graphic Tee',
            image: 'w1.jpg',
            price: 12.50,
            discount: 5,
            discountPrice: 12.50 - 5 / 100 * 12.50,
            quantity: 1,
            description: 'You can not sit with us unless you are wearing this tee.',
            fit: 'Boyfriend fit and crew neck',
            care: '100% Cotton - Machine wash in cold water. Gentle cycle with like colours. Turn garments inside out while washing. No bleach. Tumble dry low. Low iron on reverse side.'
        },

        {
            id: 8,
            name: 'Batman DC Comics Tee',
            image: 'w2.jpg',
            price: 18.50,
            discount: 5,
            discountPrice: 18.50 - 5 / 100 * 18.50,
            quantity: 1,
            description: 'This Batman Graphic Tee is coming to save the day! Looks good online and irl.',
            fit: 'Boyfriend fit and crew neck',
            care: '100% Cotton - Machine wash in cold water. Gentle cycle with like colours. Turn garments inside out while washing. No bleach. Tumble dry low. Low iron on reverse side.'
        },

        {
            id: 9,
            name: 'Aéropostale Ribbed Graphic Tee',
            image: 'w3.jpg',
            price: 19.50,
            discount: 5,
            discountPrice: 19.50 - 5 / 100 * 19.50,
            quantity: 1,
            description: 'You can not sit with us unless you are wearing this tee.',
            fit: 'Boyfriend fit and crew neck',
            care: '100% Cotton - Machine wash in cold water. Gentle cycle with like colours. Turn garments inside out while washing. No bleach. Tumble dry low. Low iron on reverse side.'
        },

        {
            id: 10,
            name: 'Nice Classic Graphic Tee',
            image: 'w4.jpg',
            price: 8.50,
            discount: 5,
            discountPrice: 8.50 - 5 / 100 * 8.50,
            quantity: 1,
            description: 'Time to put super soft holiday tees at the top of your wish list.',
            fit: 'Boyfriend fit and crew neck',
            care: '100% Cotton - Machine wash in cold water. Gentle cycle with like colours. Turn garments inside out while washing. No bleach. Tumble dry low. Low iron on reverse side.'
        },

        {
            id: 11,
            name: 'Super Soft Graphic Tee',
            image: 'w5.jpg',
            price: 22.50,
            discount: 5,
            discountPrice: 22.50 - 5 / 100 * 22.50,
            quantity: 1,
            description: 'Time to put super soft holiday tees at the top of your wish list.',
            fit: 'Boyfriend fit and crew neck',
            care: '100% Cotton - Machine wash in cold water. Gentle cycle with like colours. Turn garments inside out while washing. No bleach. Tumble dry low. Low iron on reverse side.'
        },

        {
            id: 12,
            name: 'NYC Boyfriend Graphic Tee',
            image: 'w6.jpg',
            price: 16.50,
            discount: 5,
            discountPrice: 16.50 - 5 / 100 * 16.50,
            quantity: 1,
            description: 'A graphic tee that looks good for your online video calls and irl. Pick your fave!',
            fit: 'Boyfriend fit and crew neck',
            care: '100% Cotton - Machine wash in cold water. Gentle cycle with like colours. Turn garments inside out while washing. No bleach. Tumble dry low. Low iron on reverse side.'
        },

    ],

    product:{}

}

const ProductsReducerW = (state = initState, action) =>{

    switch(action.type){

        case "PRODUCT":
            return{
                ...state, product: state.products.find(
                    product => product.id === parseInt (action.id))
            }

        default:
            return state;
    }
}

export default ProductsReducerW