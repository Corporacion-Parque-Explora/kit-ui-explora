const { default: Link } = require('next/link');

const BackLink = ({ sections, href }) => (
  <Link href={href}>
    <div className="back-link">
      <i className="icon-explora icon-arrow-left-cirlcle"></i>
      {sections.map((section, index) =>
        index < 1 ? section : ` > ${section}`
      )}
    </div>
  </Link>
);

export default BackLink;
