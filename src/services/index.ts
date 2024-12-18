import axios from 'axios'
import type { IProductWidget } from '@/interfaces'

/**
 * Service class for managing product widgets.
 */
export class ProductWidgetService {
  /**
   * Fetches all product widgets from the API.
   *
   * @returns {Promise<IProductWidget[]>} A promise that resolves to an array of product widgets.
   * @throws {Error} Throws an error if the request fails.
   */
  static getAll(): Promise<IProductWidget[]> {
    return axios
      .get('https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets')
      .then((res) => res.data) // Extracts the data from the response
      .catch((error) => {
        console.error('Error fetching product widgets:', error) // Logs the error to the console
        throw error // Rethrow the error after logging it
      })
  }
}
