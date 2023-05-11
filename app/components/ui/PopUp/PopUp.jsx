import Image from 'next/image';

// eslint-disable-next-line arrow-body-style
export const PopUp = ({ data, setShareModal }) => {
  console.log(data);
  return (
    <div className="modal is-active">
      <div
        className="modalBackground"
        onClick={() => setShareModal(false)}
      ></div>
      <div className="modalContent">
        <div className="modalContentClose">
          <span onClick={() => setShareModal(false)}>x</span>
        </div>
        <div className="modalInformation">
          <div className="modalInformationImg">
            <Image
              src={data?.background_img}
              alt="foto perfil"
              className="modalInformationImage"
              width={200}
              height={200}
            />
          </div>
          <div className="modalInformationText">
            <h1 className="modalInformationTextName">{data?.name}</h1>
            <p className="modalInformationTextJob">{data?.job}</p>
            <p className="modalInformationTextDate"> {data?.date}</p>
          </div>
        </div>
        <div className="modalText">
          <p>{data?.description}</p>
        </div>
      </div>
    </div>
  );
};
