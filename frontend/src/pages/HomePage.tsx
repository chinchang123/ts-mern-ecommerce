
import { Col, Row } from 'react-bootstrap'
import { getError } from '../types/util'
import { ApiError } from '../types/ApiError'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHook'

export default function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery()
  return isLoading ? (
    
      <LoadingBox />
    ) : error ? (
      <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
    ) : (
    <Row>
      <Helmet>
        <title>BBVC- Shop</title>
      </Helmet>
    {products!.map((product)=>(
      <Col key={product.slug} sm={6} md={4} lg={3}>
        <ProductItem product={product}/>
      </Col>
    ))}
  </Row>
  )
}
