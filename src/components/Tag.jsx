import '../style/tag.css';

function Tag( {tags}) {

  return (
    <div className='tag'>
      {tags.map((tag, index) => (
        <div key={`${tag}-${index}`}>
          <p className='tag__p'>{tag}</p>
        </div>
      ))}
    </div>
  );
};

export default Tag