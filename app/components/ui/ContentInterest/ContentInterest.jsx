import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import Image from 'next/image';
import { MainSlider } from '../MainSlider/MainSlider';

export const ContentInterest = ({
  bannerImg,
  title,
  subtitle,
  description,
  titleList,
  list,
  listImg,
  buttonText,
  buttonURL,
}) => {
  const sanitizer = DOMPurify.sanitize;
  return (
    <>
      {bannerImg && (
        <div className="contentInterest">
          <MainSlider
            data={[{ title, subtitle, background_img: bannerImg }]}
            height={'40vh'}
            isCentered
            simple
          />

          <div className="contentInterestInfo">
            <div className="contentInterestInfoItem1">
              <div className="contentInterestInfoItem1Text">
                {description && (
                  <>
                    <div
                      className="contentInterestInfoItem1TextDescription content"
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(description, {}),
                      }}
                    ></div>
                    <Link href={`${buttonURL}`} legacyBehavior>
                      <a className="btn-explore">{buttonText}</a>
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="contentInterestInfoItem2">
              <h3 className="contentInterestInfoItem2Titlelist">{titleList}</h3>
              <div className="contentInterestInfoItem2List">
                <div className="contentInterestInfoItem2ListImage">
                  <Image
                    src={listImg}
                    alt=""
                    width={200}
                    height={100}
                    layout="responsive"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {list && (
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(list, {}),
                    }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
