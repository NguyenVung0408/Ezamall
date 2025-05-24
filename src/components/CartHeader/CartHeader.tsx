import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import useSearchProducts from 'src/hooks/useSearchProducts'
import NavHeader from '../NavHeader'

export default function CartHeader() {
  const { onSubmitSearch, register } = useSearchProducts()

  return (
    <div className='border-b border-b-black/10'>
      <div className='bg-blue text-white'>
        <div className='container'>
          <NavHeader />
        </div>
      </div>
      <div className='bg-white py-6'>
        <div className='container'>
          <nav className='md:flex md:items-center md:justify-between'>
            <Link to={path.home} className='flex flex-shrink-0 items-end'>
              <div>
                <svg className='w-16 h-16 scale-y-[-1]' fill='#0F88EC' viewBox='0 0 2000 2200'>
                  <g fillRule='evenodd'>
          <path d="M1023 1123 c-14 -3 -23 -12 -23 -23 0 -17 9 -19 72 -22 l72 -3 73
-310 c59 -256 75 -313 94 -327 20 -17 45 -18 278 -16 248 3 256 4 256 23 0 19
-8 20 -257 23 -196 2 -258 5 -258 15 0 6 -3 22 -6 35 l-6 22 245 0 c273 0 271
-1 283 68 3 20 19 102 35 181 36 180 36 194 2 221 -31 24 -47 22 -51 -8 -2
-14 2 -22 11 -22 19 0 26 -19 20 -51 l-4 -24 -292 0 c-277 0 -292 -1 -292 -18
0 -18 15 -19 288 -17 158 0 287 -3 287 -7 -1 -4 -13 -69 -28 -143 l-28 -135
-243 0 -244 0 -57 246 c-32 135 -63 255 -69 267 -10 18 -21 22 -61 22 -26 0
-54 2 -62 4 -7 2 -23 1 -35 -1z"/>
<path d="M1331 374 c-12 -15 -21 -34 -21 -44 0 -34 39 -70 75 -70 36 0 75 36
75 70 0 34 -39 70 -75 70 -24 0 -39 -7 -54 -26z m77 -38 c4 -21 -14 -37 -35
-29 -14 5 -18 35 -6 47 12 12 38 1 41 -18z"/>
<path d="M1696 384 c-46 -45 -19 -116 46 -122 29 -2 40 2 57 24 26 34 27 54
0 88 -24 30 -78 36 -103 10z m72 -48 c4 -21 -14 -37 -35 -29 -14 5 -18 35 -6
47 12 12 38 1 41 -18z"/>
<path d="M1950 90 c0 -93 1 -100 20 -100 19 0 20 7 20 100 0 93 -1 100 -20
100 -19 0 -20 -7 -20 -100z"/>
<path d="M2054 177 c-3 -8 -4 -51 -2 -98 3 -70 6 -84 21 -87 15 -3 17 7 17
97 0 84 -3 101 -15 101 -9 0 -18 -6 -21 -13z"/>
<path d="M1030 85 l0 -90 50 0 c41 0 50 3 50 17 0 13 -8 18 -30 18 -23 0 -30
4 -30 20 0 16 7 20 30 20 20 0 30 5 30 15 0 10 -10 15 -30 15 -23 0 -30 4 -30
20 0 16 7 20 30 20 19 0 30 5 30 14 0 10 -15 15 -50 18 l-50 3 0 -90z"/>
<path d="M1180 114 c0 -12 7 -15 30 -12 17 3 30 3 30 0 0 -2 -13 -21 -30 -42
-44 -55 -40 -65 23 -64 38 0 52 4 52 15 0 10 -10 13 -34 11 l-34 -4 31 43 c44
60 42 69 -18 69 -39 0 -50 -3 -50 -16z"/>
<path d="M1343 118 c2 -7 16 -13 32 -13 15 0 30 -6 32 -12 3 -8 -4 -13 -17
-13 -34 0 -60 -19 -60 -44 0 -36 25 -52 61 -39 17 7 31 7 35 2 3 -5 9 -9 15
-9 13 0 11 114 -3 128 -17 17 -101 16 -95 0z m67 -72 c0 -19 -17 -29 -37 -22
-12 5 -13 9 -3 21 16 19 40 19 40 1z"/>
<path d="M1510 58 c0 -61 2 -68 20 -68 18 0 20 7 20 54 0 37 4 56 14 59 23 9
38 -19 34 -65 -2 -34 0 -43 15 -46 14 -3 17 4 17 45 0 51 13 75 36 66 10 -3
14 -22 14 -59 0 -47 2 -54 20 -54 17 0 20 7 20 51 0 84 -5 88 -115 87 l-95 -1
0 -69z"/>
<path d="M1785 121 c-8 -14 11 -22 38 -16 17 5 26 2 30 -9 5 -12 0 -16 -19
-16 -39 0 -64 -18 -64 -46 0 -32 38 -51 68 -35 14 7 23 8 27 1 3 -5 10 -10 16
-10 13 0 11 114 -3 128 -14 14 -84 16 -93 3z m73 -73 c-6 -16 -36 -34 -44 -26
-3 4 -4 14 -1 23 7 17 51 21 45 3z"/>
          </g>
          </svg>
              </div>
              <div className='mx-4 h-6 w-[1px] bg-blue md:h-8' />
              <div className='capitalize text-blue md:text-xl'>Giỏ hàng</div>
            </Link>
            <form className='mt-3 md:mt-0 md:w-[50%]' onSubmit={onSubmitSearch}>
              <div className='flex rounded-sm border-2 border-blue'>
                <input
                  type='text'
                  className='w-full flex-grow border-none bg-transparent px-3 py-1 text-black outline-none'
                  placeholder='Free Ship Đơn Từ 0Đ'
                  {...register('name')}
                />
                <button className='flex-shrink-0 rounded-sm bg-blue py-2 px-8 hover:opacity-90'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5 stroke-white'
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
          </nav>
        </div>
      </div>
    </div>
  )
}