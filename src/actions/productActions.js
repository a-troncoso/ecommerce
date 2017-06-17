import {
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE,
	SAVE_PRODUCT_SUCCESS,
	SAVE_PRODUCT_FAILURE
} from './types'

// Actions Creators
export function fetchProductsSuccess(products) {
	return {
		type: FETCH_PRODUCTS_SUCCESS,
		payload: products
	}
}

export function fetchProductsFailure(error) {
	return {
		type: FETCH_PRODUCTS_FAILURE,
		payload: error
	}
}

export function fetchProductSuccess(product) {
	return {
		type: FETCH_PRODUCT_SUCCESS,
		payload: product
	}
}

export function fetchProductFailure(error) {
	return {
		type: FETCH_PRODUCT_FAILURE,
		payload: error
	}
}

export function saveProductSuccess() {
	return {
		type: SAVE_PRODUCT_SUCCESS
	}
}

export function saveProductFailure(error) {
	return {
		type: SAVE_PRODUCT_FAILURE
	}
}