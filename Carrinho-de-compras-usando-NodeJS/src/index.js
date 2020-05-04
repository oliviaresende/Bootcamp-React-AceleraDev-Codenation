const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const getProducts = products => (products.map(product => ({name: product.name, category: product.category})))
const getPromotion = products => {
	const list = products.map(produto => produto.category)
	const categories = list.filter((product, index) => list.indexOf(product) === index)
	return promotions[categories.length - 1]
}
const getPriceRegular = products => (products.reduce((total, product) => ( total + product.regularPrice ), 0).toFixed(2))
const getPricePromotion = (product, promotion) => (product.promotions.find(promo => promo.looks.includes(promotion)) || [])
const getPriceTotal = (products, promotion) => (products.reduce((total, product) => {
		let pricePromotion = getPricePromotion(product, promotion)
		return total += (pricePromotion.price || product.regularPrice)
	},0).toFixed(2))
const getShoppingCart = (ids, productsList) => {
	const productsFilter = ids.map(id => productsList.find(product => id === product.id))
	const priceTotalRegular = getPriceRegular(productsFilter)
	const products = getProducts(productsFilter)
	const promotion = getPromotion(productsFilter)
	const totalPrice = getPriceTotal(productsFilter, promotion)
	const discountValue = (priceTotalRegular - totalPrice).toFixed(2)
	const discount = (discountValue/priceTotalRegular*100).toFixed(2) + '%'
	return {
		products,
		promotion,
		totalPrice,
		discountValue, 
		discount
	}
}

module.exports = { getShoppingCart };
