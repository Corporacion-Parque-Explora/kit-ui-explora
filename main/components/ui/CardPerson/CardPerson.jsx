import Image from 'next/image';


export const CardPerson = ({ data, openModal }) => (

      <div className="cardPerson">
        <div className="cardPersonImg">
          <a>
            
            <Image
              onClick={() => openModal(data)}
              src={data?.background_img}
              alt=""
              width={300}
              height={270}
            />
          </a>
        </div>
        <div className="cardPersonContent">
          <h4 className="cardPersonName">{data?.name}</h4>
          <p className="cardPersonJob">{data?.job}</p>
          <br />
        </div>
      </div>
  );