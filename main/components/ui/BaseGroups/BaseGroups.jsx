import Link from 'next/link';

export const BaseGroups = ({ data }) => (
  <div className="groupsBase">
    <div className="containerGroups">
      {data?.map((item, index) => (
        <div
          key={index}
          className={`group${index + 1}`}
          style={{
            backgroundImage: `url(${item.background_img || '#000000'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="card">
            <h4 className="is-size-3 text-upperCase">{item.title}</h4>
            <div className="text-description">
              <p className="is-light">{item.subtitle}</p>
              <Link href="" legacyBehavior>
                <a className="btn-explore target ">VER MÁS</a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
