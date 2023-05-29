export const PopUp = ({ setShareModal }) => {
  return (
    <div className="item">
      <div className="modal is-active">
        <div
          className="modalBackground"
          onClick={() => setShareModal(false)}
        ></div>
        <div className="modalContent">
          <div className="modalContentClose">
            <span onClick={() => setShareModal(true)}>x</span>
          </div>
          <div className="modalInformation">
            <div className="modalInformationImg"></div>
            <div className="modalInformationText">
              <h1 className="modalInformationTextName">Nómbre</h1>
              <p className="modalInformationTextJob">Puesto</p>
              <p className="modalInformationTextDate"> Fech</p>
            </div>
          </div>
          <div className="modalText">
            <p>Descripción</p>
          </div>
        </div>
      </div>
    </div>
  );
};
