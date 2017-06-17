import {
	LOAD_CART_ITEMS,
	ADD_CART_ITEMS,
	REMOVE_CART_ITEM
} from './types'

export function loadCartItem() {
	return {
		type: LOAD_CART_ITEMS
	}
}

export function addCartItem(item) {
	return {
		type: ADD_CART_ITEMS,
		payload: item
	}
}

export function removeCartItem(item) {
	return {
		type: REMOVE_CART_ITEM,
		payload: item
	}
}