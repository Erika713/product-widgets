import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'
import { ProductWidgetService } from '@/services'
import type { IProductWidget } from '@/interfaces'

// Describe the test suite for ProductWidgetService
describe('ProductWidgetService', () => {
  // Describe the tests for the getAll method
  describe('getAll', () => {
    // Test case for successful fetching of product widgets
    it('should fetch all product widgets successfully', async () => {
      // Mock data to be returned by the axios.get method
      const mockData: IProductWidget[] = [
        {
          id: 1,
          type: 'carbon',
          amount: 100,
          action: 'collects',
          active: true,
          linked: false,
          selectedColor: 'green'
        }, 
        {
          id: 2,
          type: 'trees',
          amount: 100,
          action: 'plants',
          active: true,
          linked: false,
          selectedColor: 'blue'
        }
      ];

      // Spy on axios.get and mock its resolved value
      vi.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockData });

      // Call the getAll method from ProductWidgetService
      const result = await ProductWidgetService.getAll();

      // Assert that the result matches the mock data
      expect(result).toEqual(mockData);
      // Assert that axios.get was called with the correct URL
      expect(axios.get).toHaveBeenCalledWith(
        'https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets'
      );
    });

    // Test case for handling errors when the request fails
    it('should throw an error when the request fails', async () => {
      // Mock error message to be thrown by axios.get
      const errorMessage = 'Network Error';
      // Spy on axios.get and mock its rejected value
      vi.spyOn(axios, 'get').mockRejectedValueOnce(new Error(errorMessage));

      // Assert that calling getAll throws the expected error
      await expect(ProductWidgetService.getAll()).rejects.toThrow(errorMessage);
      // Assert that axios.get was called with the correct URL
      expect(axios.get).toHaveBeenCalledWith(
        'https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets'
      );
    });
  });
});