const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getProducts(products) {
	return products.map(product => {
		return {
			name: product.name,
			category: product.category
		}
	})
}
function getPromotion(products) {
	const list = products.map(produto => produto.category)
	const categories = list.filter((product, index) => list.indexOf(product) === index)
	return promotions[categories.length - 1]
}
function getPriceRegular(products) {
	return products.reduce((total, product) => { return total + product.regularPrice }, 0).toFixed(2)
}
function getPricePromotion(product, promotion) {
	return product.promotions.find(promo => promo.looks.includes(promotion)) || []
}
function getPriceTotal(products, promotion){
	return products.reduce((total, product) => {
		let pricePromotion = getPricePromotion(product, promotion)
		return total += (pricePromotion.price || product.regularPrice)
	},0).toFixed(2)
}
function getShoppingCart(ids, productsList) {
	const productsFilter = ids.map(id => productsList.find(product => id === product.id))
	const priceTotalRegular = getPriceRegular(productsFilter)
	const products = getProducts(productsFilter)
	const promotion = getPromotion(productsFilter)
	const priceTotalPromotion = getPriceTotal(productsFilter, promotion)
	const discountValue = (priceTotalRegular - priceTotalPromotion).toFixed(2)
	const discount = (discountValue/priceTotalRegular*100).toFixed(2) + '%'

	return {
		products: products,
		promotion: promotion,
		totalPrice: priceTotalPromotion,
		discountValue: discountValue, 
		discount: discount
	}
}

module.exports = { getShoppingCart };
