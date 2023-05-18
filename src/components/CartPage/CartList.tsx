import styled from 'styled-components';
import CartListItem from './CartListItem';
import SelectCartItem from './SelectCartItem';
import { useRecoilValue } from 'recoil';
import { cartState } from '../../atoms/cartState';

export default function CartList() {
  const cart = useRecoilValue(cartState);
  return (
    <CartListContainer>
      <CartListHeader>든든 배송 상품 (n개)</CartListHeader>
      {cart.map(({ id, quantity, product }) => (
        <CartListItem key={id} quantity={quantity} product={product} />
      ))}

      <SelectCartItem />
    </CartListContainer>
  );
}

const CartListContainer = styled.div`
  width: 55%;
`;

const CartListHeader = styled.h3`
  ${({ theme }) => theme.fonts.cartHeading};
  border-bottom: 4px solid ${({ theme }) => theme.colors.gray200};
`;
