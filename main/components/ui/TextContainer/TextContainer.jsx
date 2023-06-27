import DOMPurify from 'isomorphic-dompurify';

export const TextContainer = ({ height, description }) => {
  const sanitizer = DOMPurify.sanitize;
  return (
    <div
      className="textContainer content"
      style={{ minHeight: `${height}` }}
      dangerouslySetInnerHTML={{
        __html: sanitizer(description, {
          ADD_TAGS: ['iframe'],
          ADD_ATTR: [
            'allow',
            'allowfullscreen',
            'frameborder',
            'scrolling',
            'target',
          ],
        }),
      }}
    ></div>
  );
};
