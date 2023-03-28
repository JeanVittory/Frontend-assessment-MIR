import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCardProp } from './types';
import { Caption } from '@components/caption';
import { Button } from '@components/button';
import { Timer } from '@components/timer';
import { getRandomMinutes, getRandomSeconds } from '@utils/index';
import './productCard.components.scss';

export default function ProductCard({
  id,
  title,
  image,
}: ProductCardProp): JSX.Element {
  const [isAllowed, setIsAllowed] = useState<boolean>(true);

  const minute: number = getRandomMinutes();
  const second: number = getRandomSeconds();

  const navigate = useNavigate();

  const handleDetail = (): void => {
    if (!isAllowed) return;
    navigate(`/detail/${id}`);
    return;
  };

  return (
    <article className="product">
      <div className="image-container">
        <img src={image} alt={title} className="image-container__image" />
      </div>
      <Caption className="product__title">{title}</Caption>
      <div className="product__footer">
        <Timer minutes={minute} seconds={second} setIsAllowed={setIsAllowed} />
        <Button
          type="button"
          event={handleDetail}
          className={`${isAllowed ? 'able' : 'unable'} product__button`}
        >
          Go to Detail
        </Button>
      </div>
    </article>
  );
}
