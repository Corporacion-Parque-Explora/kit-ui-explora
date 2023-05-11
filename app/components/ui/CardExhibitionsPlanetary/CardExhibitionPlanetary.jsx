import Link from 'next/link';
import React from 'react';
import { ButtonGeneric } from '../ButtonGeneric/ButtonGeneric';

export const CardExhibitionPlanetary = ({ exhibitions }) => (
  <>
    {exhibitions.map(
      (item, index) =>
        index < 4 && (
          <div
            key={index}
            className="cardExhibitionPlanetary"
            style={{
              backgroundImage: item.thumbnail
                ? `url(${item.thumbnail}?fit=crop&w=318&h=420)`
                : 'none',
            }}
          >
            <div className="cardExhibitionPlanetary__overlay"></div>
            <h3>{item.title}</h3>
            <Link href={`/visitanos/${item.slug}`} passHref legacyBehavior>
              <ButtonGeneric
                href={''}
                className={
                  'btn-planetary target white cardExhibitionPlanetary__btn'
                }
                textButton={'Ver más'}
                ariaLabel={`Ver mas sobre ${item.title}`}
                textTransform={'none'}
              />
            </Link>
          </div>
        )
    )}
  </>
);
