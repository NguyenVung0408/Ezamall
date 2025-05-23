import http from 'src/utils/http'
import { type Category } from 'src/types/category.type'
import { type SuccessResponse } from 'src/types/utils.type'

const URL = 'categories'

const categoryApi = {
  getCategories() {
    return http.get<SuccessResponse<Category[]>>(URL)
  }
}

export default categoryApi