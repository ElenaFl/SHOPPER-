import { create } from "zustand";
 
/**
 * Получение данных из localStorage
 * @returns {Array} Массив товаров
 */
const getProductsFromStorage = () => {
    const stored = localStorage.getItem('basketList');
    const basketList = stored ? JSON.parse(stored) : [];
    console.log(basketList)
    return basketList;
};
 
// Стор корзины товаров.
export const useBasketStore = create((set, get) => {
  /**
   * Добавление товаров в корзину
   * @param {Object} product - Данные товара.
   */
  const addToBasket = (product) => {
    const currentCart = get()?.basketList || [];
 
    // Ищем товар в корзине по id
    const existingProduct = currentCart?.find(({ id }) => id === product?.id);
 
    if (existingProduct) {
      // Если товар уже в корзине, увеличиваем количество
      existingProduct.cartQuantity += 1;
    } else {
      currentCart?.push({ ...product });
    }
 
    localStorage?.setItem('basketList', JSON?.stringify(currentCart));
 
    set({ basketList: currentCart });
    
  };
 
  /**
   * Удаление товара из корзины
   * @param {string} productId - ID товара.
   */
  const removeFromBasket = (productId) => {
    const currentCart = get()?.basketList || [];
    const findProduct = currentCart?.find(({ id }) => id === productId);
 
    if (findProduct) {
      currentCart?.splice(currentCart?.indexOf(findProduct), 1);
    }
 
    localStorage?.setItem('basketList', JSON?.stringify(currentCart));
 
    set({ basketList: currentCart });
  };
 
  /**
   * Обновление количества товара в корзине
   * @param {string} id - ID товара.
   * @param {number} quantity - Количество товара.
   */
  const updateQuantity = (productId, quantity) => {
    const currentCart = get()?.basketList || [];
    const findProduct = currentCart?.find(({ id }) => id === productId);
 console.log(quantity)
    if (findProduct) {
      findProduct.cartQuantity = quantity;
    }
 
    localStorage?.setItem('basketList', JSON?.stringify(currentCart));
 
    set({ basketList: currentCart });
    console.log(currentCart)

  };
 
 
 
  // Подсчет общего кол-ва товара
  const getTotalQuantity = () => {
    const basketList = get()?.basketList || [];
    let total = basketList?.reduce((acc, item) => acc + item?.cartQuantity, 0);
 
    localStorage?.setItem('basketList', JSON?.stringify(basketList));
 
    return total;
  };
 
  return {
    basketList: getProductsFromStorage(),
    addToBasket,
    removeFromBasket,
    updateQuantity,
    getTotalQuantity,
  };
});