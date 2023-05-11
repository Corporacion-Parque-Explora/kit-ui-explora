/* eslint-disable no-undef */
import Link from 'next/link';

export const FormationGroups = ({ data }) => (
  <div className="groupsFormation">
    {data?.map((item, index) => (
      <div
        key={index}
        className="groupsFormationCard"
        style={{
          backgroundImage: `url(${item.background_img || '#000000'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="groupsFormationCardContent">
          <h4 className="groupsFormationCardContentTitle">{item.title}</h4>
          <div className="groupsFormationCardContentText">
            <p className="groupsFormationCardContentTextDescription">
              {item.intro}
            </p>
            <Link href={`/${item.slug}`} legacyBehavior>
              <a className="btn-explore target">VER MÁS</a>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);
