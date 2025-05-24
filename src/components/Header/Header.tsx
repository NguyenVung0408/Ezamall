import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'
import Popover from '../Popover'
import { purchasesStatus } from 'src/constants/purchase'
import purchaseApi from 'src/apis/purchase.api'
import noproduct from 'src/assets/images/no-product.png'
import { formatCurrency } from 'src/utils/utils'
import NavHeader from '../NavHeader'
import useSearchProducts from 'src/hooks/useSearchProducts'

const MAX_PURCHASES = 5
export default function Header() {
  const { isAuthenticated } = useContext(AppContext)
  const { onSubmitSearch, register } = useSearchProducts()

  // Khi chúng ta chuyển trang thì Header chỉ bị re-render
  // Chứ không bị unmount - mounting again
  // (Tất nhiên là trừ trường hợp logout rồi nhảy sang RegisterLayout rồi nhảy vào lại)
  // Nên các query này sẽ không bị inactive => Không bị gọi lại => không cần thiết phải set stale: Infinity

  const { data: purchasesInCartData } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchases({ status: purchasesStatus.inCart }),
    enabled: isAuthenticated
  })

  const purchasesInCart = purchasesInCartData?.data.data

  return (
    <div className='bg-[linear-gradient(-180deg,#3391BD,#61B2D5)] pb-5 pt-2 text-white'>
      <div className='container'>
        <NavHeader />
        <div className='mt-4 grid grid-cols-12 items-end gap-4'>
          <Link to='/' className='col-span-2'>
            <svg className='h-20 w-full scale-y-[-1] fill-white' viewBox='0 0 2000 2200'>
              <g fillRule='evenodd'>
          <path d="M1023 1323 c-14 -3 -23 -12 -23 -23 0 -17 9 -19 72 -22 l72 -3 73
-310 c59 -256 75 -313 94 -327 20 -17 45 -18 278 -16 248 3 256 4 256 23 0 19
-8 20 -257 23 -196 2 -258 5 -258 15 0 6 -3 22 -6 35 l-6 22 245 0 c273 0 271
-1 283 68 3 20 19 102 35 181 36 180 36 194 2 221 -31 24 -47 22 -51 -8 -2
-14 2 -22 11 -22 19 0 26 -19 20 -51 l-4 -24 -292 0 c-277 0 -292 -1 -292 -18
0 -18 15 -19 288 -17 158 0 287 -3 287 -7 -1 -4 -13 -69 -28 -143 l-28 -135
-243 0 -244 0 -57 246 c-32 135 -63 255 -69 267 -10 18 -21 22 -61 22 -26 0
-54 2 -62 4 -7 2 -23 1 -35 -1z"/>
<path d="M1331 574 c-12 -15 -21 -34 -21 -44 0 -34 39 -70 75 -70 36 0 75 36
75 70 0 34 -39 70 -75 70 -24 0 -39 -7 -54 -26z m77 -38 c4 -21 -14 -37 -35
-29 -14 5 -18 35 -6 47 12 12 38 1 41 -18z"/>
<path d="M1696 584 c-46 -45 -19 -116 46 -122 29 -2 40 2 57 24 26 34 27 54
0 88 -24 30 -78 36 -103 10z m72 -48 c4 -21 -14 -37 -35 -29 -14 5 -18 35 -6
47 12 12 38 1 41 -18z"/>
<path d="M1950 290 c0 -93 1 -100 20 -100 19 0 20 7 20 100 0 93 -1 100 -20
100 -19 0 -20 -7 -20 -100z"/>
<path d="M2054 377 c-3 -8 -4 -51 -2 -98 3 -70 6 -84 21 -87 15 -3 17 7 17
97 0 84 -3 101 -15 101 -9 0 -18 -6 -21 -13z"/>
<path d="M1030 285 l0 -90 50 0 c41 0 50 3 50 17 0 13 -8 18 -30 18 -23 0 -30
4 -30 20 0 16 7 20 30 20 20 0 30 5 30 15 0 10 -10 15 -30 15 -23 0 -30 4 -30
20 0 16 7 20 30 20 19 0 30 5 30 14 0 10 -15 15 -50 18 l-50 3 0 -90z"/>
<path d="M1180 314 c0 -12 7 -15 30 -12 17 3 30 3 30 0 0 -2 -13 -21 -30 -42
-44 -55 -40 -65 23 -64 38 0 52 4 52 15 0 10 -10 13 -34 11 l-34 -4 31 43 c44
60 42 69 -18 69 -39 0 -50 -3 -50 -16z"/>
<path d="M1343 318 c2 -7 16 -13 32 -13 15 0 30 -6 32 -12 3 -8 -4 -13 -17
-13 -34 0 -60 -19 -60 -44 0 -36 25 -52 61 -39 17 7 31 7 35 2 3 -5 9 -9 15
-9 13 0 11 114 -3 128 -17 17 -101 16 -95 0z m67 -72 c0 -19 -17 -29 -37 -22
-12 5 -13 9 -3 21 16 19 40 19 40 1z"/>
<path d="M1510 258 c0 -61 2 -68 20 -68 18 0 20 7 20 54 0 37 4 56 14 59 23 9
38 -19 34 -65 -2 -34 0 -43 15 -46 14 -3 17 4 17 45 0 51 13 75 36 66 10 -3
14 -22 14 -59 0 -47 2 -54 20 -54 17 0 20 7 20 51 0 84 -5 88 -115 87 l-95 -1
0 -69z"/>
<path d="M1785 321 c-8 -14 11 -22 38 -16 17 5 26 2 30 -9 5 -12 0 -16 -19
-16 -39 0 -64 -18 -64 -46 0 -32 38 -51 68 -35 14 7 23 8 27 1 3 -5 10 -10 16
-10 13 0 11 114 -3 128 -14 14 -84 16 -93 3z m73 -73 c-6 -16 -36 -34 -44 -26
-3 4 -4 14 -1 23 7 17 51 21 45 3z"/>
          </g>
          </svg>
          </Link>
          <form className='col-span-9' onSubmit={onSubmitSearch}>
            <div className='flex rounded-sm bg-white p-1'>
              <input
                type='text'
                className='flex-grow border-none bg-transparent px-3 py-2 text-black outline-none'
                placeholder='Free Ship Đơn Từ 0Đ'
                {...register('name')}
              />
              <button className='flex-shrink-0 rounded-sm bg-blue py-2 px-6 hover:opacity-90'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className='col-span-1 justify-self-end'>
            <Popover
              renderPopover={
                <div className='relative  max-w-[400px] rounded-sm border border-gray-200 bg-white text-sm shadow-md'>
                  {purchasesInCart && purchasesInCart.length > 0 ? (
                    <div className='p-2'>
                      <div className='capitalize text-gray-400'>Sản phẩm mới thêm</div>
                      <div className='mt-5'>
                        {purchasesInCart.slice(0, MAX_PURCHASES).map((purchase) => (
                          <div className='mt-2 flex py-2 hover:bg-gray-100' key={purchase._id}>
                            <div className='flex-shrink-0'>
                              <img
                                src={purchase.product.image}
                                alt={purchase.product.name}
                                className='h-11 w-11 object-cover'
                              />
                            </div>
                            <div className='ml-2 flex-grow overflow-hidden'>
                              <div className='truncate'>{purchase.product.name}</div>
                            </div>
                            <div className='ml-2 flex-shrink-0'>
                              <span className='text-blue'>₫{formatCurrency(purchase.product.price)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className='mt-6 flex items-center justify-between'>
                        <div className='text-xs capitalize text-gray-500'>
                          {purchasesInCart.length > MAX_PURCHASES ? purchasesInCart.length - MAX_PURCHASES : ''} Thêm
                          hàng vào giỏ
                        </div>
                        <Link
                          to={path.cart}
                          className='rounded-sm bg-blue px-4 py-2 capitalize text-white hover:bg-opacity-90'
                        >
                          Xem giỏ hàng
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className='flex h-[300px] w-[300px] flex-col items-center justify-center p-2'>
                      <img src={noproduct} alt='no purchase' className='h-24 w-24' />
                      <div className='mt-3 capitalize'>Chưa có sản phẩm</div>
                    </div>
                  )}
                </div>
              }
            >
              <Link to='/' className='relative'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-8 w-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                  />
                </svg>
                {purchasesInCart && purchasesInCart.length > 0 && (
                  <span className='absolute top-[-5px] left-[17px] rounded-full bg-white px-[9px] py-[1px] text-xs text-blue '>
                    {purchasesInCart?.length}
                  </span>
                )}
              </Link>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}